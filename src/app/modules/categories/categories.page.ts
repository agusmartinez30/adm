import { Component } from '@angular/core';
import { ItemsPage } from 'src/app/core/items.page';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage extends ItemsPage {

  endPoint: string = this.settings.endPoints.construya;
  title: string = 'Categorías';

  count = 2;

  staticItems = [
    {
      id: '0',
      name: 'Restaurant'
    },
    {
      id: '1',
      name: 'Bar'
    }
  ];

  options: TableOptions = {
    detailPageName: 'category',
    handleEnable: true,
    columns: [
      {
        label: 'Nombre',
        code: 'name',
        type: 'text'
      }
    ]
  }

  getItems(infiniteScroll?: HTMLIonInfiniteScrollElement) {
    
  }

  handleTextSearch(): { [k: string]: any } {
    return this.textSearch
      ? { $or: [{ emailAddress: { $regex: this.textSearch, $options: 'i' } }] }
      : {};
  }
}
