import { Component } from '@angular/core';
import { ItemsPage } from 'src/app/core/items.page';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage extends ItemsPage {

  endPoint: string = this.settings.endPoints.projects;
  title: string = 'Proyectos';

  count = 5;

  options: TableOptions = {
    detailPageName: 'project',
    handleEnable: false,
    columns: [
      {
        label: 'Nombre',
        code: 'name',
        type: 'text'
      },
      {
        label: 'Fecha de inicio',
        code: 'startDate',
        type: 'date'
      },
      {
        label: 'Fecha de finalizacion',
        code: 'endDate',
        type: 'date'
      },
    ]
  }

}
