import { Directive } from '@angular/core';
import { BasePage } from './base.page';
import { FilterPopoverPage } from './components/filter-popover/filter-popover.page';

@Directive({ selector: '[itemsPage]' })
export abstract class ItemsPage extends BasePage {

  abstract endPoint: string;
  abstract options: TableOptions;
  items: MongoObject[] = [];
  infiniteScroll = true;
  page = 0;
  perPage = 20;
  count = 0;
  hasMorePages = true;
  popoverFilters: { [k: string]: any } = {};
  textSearch: string;
  tableMessages = {
    emptyMessage: 'No se encontró ningún elemento.',
    selectedMessage: 'seleccionado',
    totalMessage: 'total'
  };

  ionViewWillEnter() {
    this.initialize();
  }

  initialize() {
    this.initializePre();
    this.checkLoadingsAndGetItems();
  }

  initializePre() {
    if (this.infiniteScroll) this.page = 1;
    this.items = [];
  }

  getParams(): Partial<EndPointParams> {
    return { filters: { ...this.handlePopoverFilters(), ...this.handleTextSearch() } };
  }

  handleTextSearch(): { [k: string]: any } {
    return this.textSearch
      ? { $or: [{ name: { $regex: this.textSearch, $options: 'i' } }] }
      : {};
  }

  handlePopoverFilters(): { [k: string]: any } {
    const filters: { [k: string]: any } = {};
    const elements = this.handlePopoverProps().elements;

    for (const [key, value] of Object.entries(this.popoverFilters || {})) {

      const element = elements.find(element => element.key === key);

      if (element.itemType === 'dateTime') {
        if (key === 'since') filters.updatedAt = { $gte: value };
        if (key === 'until') filters.updatedAt = { $lt: value };
      }

      if (element.itemType === 'checkbox' && value.length) filters.type = { $in: value };

      if (element.itemType === 'label') {
        filters.type = value;
        if (value === 'all') delete filters.type;
      }
    }

    return filters;
  }

  handleEndpointParams(): [string, Partial<EndPointParams>] {
    return [this.endPoint, { ...(this.infiniteScroll ? { page: this.page, perPage: this.perPage, loader: false } : {}), ...this.getParams() }];
  }

  canLoadItems(): boolean {
    return true;
  }

  private checkLoadingsAndGetItems() {
    setTimeout(() => this.canLoadItems() ? this.getItems() : this.checkLoadingsAndGetItems(), 100);
  }

  getItems(infiniteScroll?: HTMLIonInfiniteScrollElement) {

    this.getItemsPre();

    this.pageService.httpGetAll(...this.handleEndpointParams())
      .then(res => this.getItemsPost(res, infiniteScroll))
      .catch(e => this.pageService.showError(e))
  }

  getItemsPre() {

  }

  getItemsPost(res: any, infiniteScroll?: HTMLIonInfiniteScrollElement) {
    this.items = infiniteScroll ? [...this.items, ...res.data] : res.data;
    if (infiniteScroll) infiniteScroll.complete();
    if (res.page === res.pages) this.hasMorePages = false;
    this.count = res.count;
  }

  handleInfiniteScroll(infiniteScroll: InfiniteScrollEvent) {
    this.page++;
    this.getItems(infiniteScroll.target);
  }

  handleTablePage(offset) {
    this.page = offset + 1;
    this.getItems();
  }

  async filter(ev) {
    const popover = await this.pageService.popoverController.create({
      component: FilterPopoverPage,
      cssClass: 'popover-class',
      translucent: true,
      event: ev,
      componentProps: this.handlePopoverProps(),
    });

    await popover.present();

    const dismiss = await popover.onDidDismiss();

    if (dismiss.data) {
      this.popoverFilters = dismiss.data;
      this.getItems();
    }
  }

  handlePopoverProps(): PopoverProps {
    return {
      filters: this.popoverFilters,
      elements: []
    };
  }

  async handleEnable(item: MongoObject) {

    const title = '¿Está seguro que desea ' + (item.enabled ? 'deshabilitar' : 'habilitar') + ' este elemento?';

    if (!await this.isSure(title)) return;

    this.pageService.httpPut(this.endPoint, { id: item.id, body: { enabled: !item.enabled } })
      .then(res => this.getItems())
      .catch(e => this.pageService.showError(e));
  }

}
