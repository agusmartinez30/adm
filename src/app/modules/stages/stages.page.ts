import { Component } from '@angular/core';
import { ItemsPage } from 'src/app/core/items.page';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.page.html',
  styleUrls: ['./stages.page.scss'],
})
export class StagesPage extends ItemsPage {



  endPoint: string = this.settings.endPoints.stages
  title: string = 'Etapas';
  projectName = "";

  count = 6;

  options: TableOptions = {
    detailPageName: 'stage',
    handleEnable: false,
    columns: [
      {
        label: 'Nombre',
        code: 'name',
        type: 'text'
      },
      {
        label: 'Orden',
        code: 'order',
        type: 'text'
      },
      {
        label: 'Fecha de Inicio',
        code: 'startDate',
        type: 'date'
      },
      {
        label: 'Fecha de finalizacion',
        code: 'endDate',
        type: 'date'
      },
      {
        label: 'Proyecto',
        code: 'project',
        type: 'text'
      },
    ]
  }

 

}
