import { Component } from '@angular/core';
import { PageService } from './core/services/page.service';
import { LoadingController, MenuController, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import * as moment from 'moment';
import { GlobalService } from './core/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  user: User;
  logged = false;
  // filesUrl = environment.filesUrl + '/';

  loading: any;
  isLoading = false;
  isLoadingProcessing = false;

  //botton menu
  public appPages: any = [
    {
      title: 'Administradores',
      url: '/administrators',
      icon: 'people-circle',
      hidden: false,
      disabled: false,
      roles: ['administrator']
    },
    {
      title: 'Clientes',
      url: '/clients',
      icon: 'person',
      hidden: false,
      disabled: false,
      roles: ['administrator']
    },
    {
      title: 'Empleados',
      url: '/employees',
      icon: 'person',
      hidden: false,
      disabled: false,
      roles: ['administrator']
    },
    {
      title: 'Teams',
      url: '/teams',
      icon: 'football',
      hidden: false,
      disabled: false,
      roles: ['administrator']
    },
    {
      title: 'Players',
      url: '/players',
      icon: 'people',
      hidden: false,
      disabled: false,
      roles: ['administrator']
    },
    {
      title: 'Proyectos',
      url: '/projects',
      icon: 'document',
      hidden: false,
      disabled: false,
      roles: ['administrator']
    },
    {
      title: 'Etapas',
      url: '/stages',
      icon: 'document',
      hidden: false,
      disabled: false,
      roles: ['administrator']
    },
    {
      title: 'Actividades',
      url: '/activities',
      icon: 'document',
      hidden: false,
      disabled: false,
      roles: ['administrator']
    },
    {
      title: 'Cerrar sesión',
      url: '/login',
      icon: 'log-out',
      hidden: false,
      disabled: false,
      roles: ['administrator'],
      action: 'logout',
    }
  ];

  constructor(
    public location: Location,
    private pageService: PageService,
    public global: GlobalService,
    private platform: Platform,
    private menu: MenuController,
    public loadingController: LoadingController,
    public menuController: MenuController
  ) {
    this.initializeApp();

    // Moment configuration
    moment.locale('es');
  }

  ngOnInit() {
  }



  initializeApp() {

    this.platform.ready().then(() => {

      this.pageService.global.getLoadingAsObservable().subscribe(async result => result ? await this.showLoading() : await this.hideLoading());

      // (+) User

      const user = this.pageService.global.checkUser();
      this.pageService.initializeSocket();

      this.pageService.global.getUserAsObservable().subscribe((result) => {

        this.user = this.pageService.global.getUser();

        if (!this.user) this.logged = false;
        else {

          this.logged = true;
        }

      });

      // (-) User

    });
  }

  async showLoading() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.isLoadingProcessing = true;

    this.loading = await this.loadingController.create({ message: this.pageService.global.settings.LOADER_TEXT });

    await this.loading.present();

    this.isLoadingProcessing = false;
  }

  hideLoading() {
    if (this.isLoadingProcessing) return setTimeout(() => this.hideLoading(), 100);

    if (this.loading) this.loading.dismiss();

    this.isLoading = false;
  }

  logout() {
    this.pageService.logout();
  }

  action(page: any) {

    if (!page.action) return;

    this[page.action]();
  }

}
