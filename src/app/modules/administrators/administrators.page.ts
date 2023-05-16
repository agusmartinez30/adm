import { Component } from '@angular/core';
import { ItemsPage } from 'src/app/core/items.page';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.page.html',
  styleUrls: ['./administrators.page.scss'],
})
export class AdministratorsPage extends ItemsPage {

  endPoint: string = this.settings.endPoints.administrators;
  title: string = 'Administradores';
  options: TableOptions = {
    detailPageName: 'administrator',
    handleEnable: true,
    columns: [
      {
        label: 'Email',
        code: 'emailAddress',
        type: 'text',
        index: 0,
      },
    ]
  }

  getParams(): Partial<EndPointParams> {
    const filters = { ...this.handleTextSearch(), roles: 'administrator' };
    const populates = [];
    const sort = { createdAt: -1 };

    return { filters, populates, sort };
  }

  handleTextSearch(): { [k: string]: any } {
    return this.textSearch
      ? { $or: [{ emailAddress: { $regex: this.textSearch, $options: 'i' } }] }
      : {};
  }
}
