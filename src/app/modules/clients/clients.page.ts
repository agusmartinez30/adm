import { Component } from '@angular/core';
import { ItemsPage } from 'src/app/core/items.page';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage extends ItemsPage {

  endPoint: string = this.settings.endPoints.clients;
  title: string = 'Clientes';

  count = 2;

  options: TableOptions = {
    detailPageName: 'client',
    handleEnable: false,
    columns: [
      {
        label: 'Email',
        code: 'emailAddress',
        type: 'text'
      },
      {
        label: 'Nombre',
        code: 'name',
        type: 'text'
      },
    ]
  }


  // handleTextSearch(): { [k: string]: any } {
  //   return this.textSearch
  //     ? { $or: [{ emailAddress: { $regex: this.textSearch, $options: 'i' } }] }
  //     : {};
  // }
}
