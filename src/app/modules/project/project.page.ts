import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ItemPage } from 'src/app/core/item.page';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage extends ItemPage {

  endPoint: string = this.settings.endPoints.projects;
  clients: MongoObject[] = [];

  initializePre() {
    this.getClients();
  }

  getClients() {
    const endPoint = this.settings.endPoints.clients;

    this.pageService.httpGetAll(endPoint, { sort: { name: 1 } })
      .then(res => this.clients = res.data)
      .catch(e => this.pageService.showError(e))
  }  

  getFormNew() {
    return this.formBuilder.group({
      name: [null, Validators.compose([Validators.min(1), Validators.required])],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      client: [null, Validators.required],
    }); 
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name, Validators.compose([Validators.min(1), Validators.required])],
      startDate: [item.startDate, Validators.required],
      endDate: [item.endDate, Validators.required],
      client: [item.client, Validators.required],
    });
  }

}
