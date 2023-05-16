import { Component } from '@angular/core';
import { ItemsPage } from 'src/app/core/items.page';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage extends ItemsPage {

  endPoint: string = this.settings.endPoints.construya;
  title: string = 'Locales';

  count = 2;

  staticItems = [
    {
      id: '0',
      email: 'diproach@gmail.com',
      name: 'Diproach',
      phone: '1234567',
      city: 'Cordoba',
      category: 'Bar'
    },
    {
      id: '1',
      email: 'diproach@gmail.com',
      name: 'Diproach',
      phone: '1234567',
      city: 'Cordoba',
      category: 'Restaurant'
    }
  ];

  options: TableOptions = {
    detailPageName: 'store',
    handleEnable: true,
    columns: [
      {
        label: 'Email',
        code: 'email',
        type: 'text'
      },
      {
        label: 'Nombre',
        code: 'name',
        type: 'text'
      },
      {
        label: 'Teléfono',
        code: 'phone',
        type: 'text'
      },
      {
        label: 'Ciudad',
        code: 'city',
        type: 'text'
      },
      {
        label: 'Categoría',
        code: 'category',
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
