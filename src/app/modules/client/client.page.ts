import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ItemPage } from 'src/app/core/item.page';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage extends ItemPage {

  endPoint: string = this.settings.endPoints.clients;

  getFormNew() {
    return this.formBuilder.group({
      name: [null, Validators.compose([Validators.min(1), Validators.required])],
      emailAddress: [null, Validators.compose([Validators.min(1), Validators.email, Validators.required])],
    });
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name, Validators.compose([Validators.min(1), Validators.required])],
      emailAddress: [item.emailAddress, Validators.compose([Validators.min(1), Validators.email, Validators.required])],
    });
  }

}
