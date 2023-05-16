import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ItemPage } from 'src/app/core/item.page';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage extends ItemPage {

  endPoint: string = this.settings.endPoints.employees;

  getFormNew() {
    return this.formBuilder.group({
      name: [null, Validators.compose([Validators.min(1), Validators.required])],
      position: [null,  Validators.required],
    });
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name, Validators.compose([Validators.min(1), Validators.required])],
      position: [item.position,  Validators.required],
    });
  }

}
