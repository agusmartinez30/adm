import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ItemPage } from 'src/app/core/item.page';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage extends ItemPage {

  endPoint: string = this.settings.endPoints.activities;
  stages: MongoObject[] = [];
  employees: MongoObject[] = [];

  initializePre() {
    this.getStages();
    this.getEmployees()
  }

  getStages() {
    const endPoint = this.settings.endPoints.stages;

    this.pageService.httpGetAll(endPoint, { sort: { name: 1 } })
      .then(res => this.stages = res.data)
      .catch(e => this.pageService.showError(e))
  }  
  getEmployees() {
    const endPoint = this.settings.endPoints.employees;

    this.pageService.httpGetAll(endPoint, { sort: { name: 1 } })
      .then(res => this.employees = res.data)
      .catch(e => this.pageService.showError(e))
  }  

  getFormNew() {
    return this.formBuilder.group({
      description: [null, Validators.compose([Validators.min(1), Validators.required])],
      stage: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      employee: [null, Validators.required],
      deliverable: [null, Validators.compose([Validators.min(1), Validators.required])],

    }); 
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      description: [item.description, Validators.compose([Validators.min(1), Validators.required])],
      stage: [item.stage, Validators.required],
      startDate: [item.startDate, Validators.required],
      endDate: [item.endDate, Validators.required],
      employee: [item.employee, Validators.required],
      deliverable: [item.deliverable, Validators.compose([Validators.min(1), Validators.required])],

    });
  }

}
