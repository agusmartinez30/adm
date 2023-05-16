import { Component } from '@angular/core';
import { ItemsPage } from 'src/app/core/items.page';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage extends ItemsPage {

  endPoint: string = this.settings.endPoints.employees;
  title: string = 'Clientes';

  count = 3;

  options: TableOptions = {
    detailPageName: 'client',
    handleEnable: false,
    columns: [
      {
        label: 'Puesto',
        code: 'position',
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
