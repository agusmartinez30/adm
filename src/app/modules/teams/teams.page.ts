import { Component } from '@angular/core';
import { ItemsPage } from 'src/app/core/items.page';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage extends ItemsPage {

  endPoint: string = this.settings.endPoints.teams;
  title: string = 'Teams';

  count = 3;

  options: TableOptions = {
    detailPageName: 'team',
    handleEnable: false,
    columns: [
      {
        label: 'Nombre',
        code: 'name',
        type: 'text'
      },
      {
        label: 'Ubicacion',
        code: 'location',
        type: 'text'
      },
      {
        label: 'Fundacion',
        code: 'fundation',
        type: 'text'
      },
    ]
  }

}
