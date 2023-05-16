import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ItemPage } from 'src/app/core/item.page';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.page.html',
  styleUrls: ['./stage.page.scss'],
})
export class StagePage extends ItemPage {

  endPoint: string = this.settings.endPoints.stages;
  projects: MongoObject[] = [];

  initializePre() {
    this.getProject();
  }

  getProject() {
    const endPoint = this.settings.endPoints.projects;

    this.pageService.httpGetAll(endPoint, { sort: { name: 1 } })
      .then(res => this.projects = res.data)
      .catch(e => this.pageService.showError(e))
  }  

  getFormNew() {
    return this.formBuilder.group({
      name: [null, Validators.compose([Validators.min(1), Validators.required])],
      order: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      project: [null, Validators.required],
    }); 
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name, Validators.compose([Validators.min(1), Validators.required])],
      order: [item.order, Validators.required],
      startDate: [item.startDate, Validators.required],
      endDate: [item.endDate, Validators.required],
      project: [item.project, Validators.required],
    });
  }

}
