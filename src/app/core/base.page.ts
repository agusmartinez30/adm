import { OnInit, Directive, OnDestroy } from '@angular/core';
import { PageService } from './services/page.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
// import { NotificationEventResponse } from '@ionic-native/push/ngx';
import { ActivatedRoute } from '@angular/router';

@Directive({ selector: '[basePage]' })
export class BasePage implements OnInit, OnDestroy {

  global = this.pageService.global;
  settings = this.pageService.global.settings;
  filesUrl = environment.filesUrl + '/';
  user: User;
  menu: any;
  subscriptions = new Subscription();

  constructor(
    public pageService: PageService,
    public activatedRoute: ActivatedRoute
  ) {
    this.checkUser();
    this.checkEvents();
    this.checkActions();
    this.handleBackButton();
  }

  private handleBackButton() {
    const backButtonBehavior = this.pageService.router.getCurrentNavigation()?.extras?.state?.backButtonBehavior as BackButtonBehavior;
    const subscription = this.pageService.platform.backButton.subscribeWithPriority(999, () => {

      console.log(backButtonBehavior);

      if (!backButtonBehavior) return this.pageService.navigateBack();

      if (backButtonBehavior.key === 'navigate') return this.pageService.navigateRoute(backButtonBehavior.route);

      if (backButtonBehavior.key === 'prevent') return;

    });

    this.subscriptions.add(subscription);
  }

  private checkUser() {
    this.user = this.global.checkUser();

    const subscription = this.global.getUserAsObservable().subscribe(res => this.user = this.global.getUser());
    this.subscriptions.add(subscription);
  }

  private checkEvents() {
    const subscription = this.global.eventEmitter.subscribe((event: { type: 'action' | 'event', payload, eventName?: string }) => this.pageService.zone.run(() => {

      if (!event.payload) return console.error('No Event Payload', event);

      console.log(event);

      if (event.type === 'action' && this[event.payload.action + 'Action']) {
        this[event.payload.action + 'Action'](event.payload);
      }

      if (event.type === 'event' && this[event.eventName + 'Event']) this[event.eventName + 'Event'](...event.payload);
    }));

    this.subscriptions.add(subscription);
  }

  private checkActions() {
    const subscription = this.global.getPendingActions().subscribe(([actions, actionsRequired]) => this.pageService.zone.run(() => {

      if (actionsRequired.length) this.performAction(actionsRequired[0]);

      this.handlePendingActions(actions);
    }));

    this.subscriptions.add(subscription);
  }

  handlePendingActions(actions) {

  }

  // private notificationAppOpenEvent(notification: NotificationEventResponse) {

  //   if (!this.showNotificationAppOpen(notification.additionalData.payload)) return;

  //   const message = notification.title + ' - ' + notification.message;
  //   const buttons = this.pageService.notificationToastButtons(notification.additionalData.payload);

  //   this.pageService.showInfoWithButton(message, buttons);
  // }

  showNotificationAppOpen(payload: { [k: string]: any }): boolean {
    return true;
  }

  generalAction(payload: { action: 'general' }) {
    console.log('generalAction');
  }

  chatAction(payload: { action: 'chat', id: string }) {

  }

  private async logoutAction(payload: { action: 'logout', httpUnauthorized?: boolean }) {

    if (!payload.httpUnauthorized) await this.pageService.createAlertModal({
      title: 'Su usuario ha sido deshabilitado',
      actions: [{
        label: 'Aceptar',
        handler: () => this.pageService.modalCtrl.dismiss()
      }]
    });

    this.pageService.navigateRoute('login');
    this.pageService.logout();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  performAction(action) {
    this[action.name + this.settings.actions.types[action.type].name]?.(action.payload)
    this.pageService.performAction(action);
  }

  getImage(name: string, size: 'default' | 'sm' | 'md' | 'lg' = 'sm') {
    return name
      ? size === 'default'
        ? this.filesUrl + name
        : this.filesUrl + size + '/' + name
      : null;
  }

  watchImage(url: string, title?: string) {
    // this.platform.is('cordova')
    // ? this.photoViewer.show(url, title)
    console.log('url', url)
    window.open(this.filesUrl + url, '_blank');
  }

  async isSure(title: string, actions?: AlertModalAction[]): Promise<boolean> {

    if (!actions) actions = [
      {
        label: 'Si',
        handler: () => this.pageService.modalCtrl.dismiss(true)
      },
      {
        label: 'No',
        handler: () => this.pageService.modalCtrl.dismiss(false)
      },
    ];

    return await this.pageService.createAlertModal({ title, actions });
  }
}
