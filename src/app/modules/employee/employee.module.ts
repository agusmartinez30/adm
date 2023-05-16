import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';

import { EmployeePage } from './employee.page';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeePageRoutingModule,
    IonCustomScrollbarModule,
    NgxDatatableModule
  ],
  declarations: [EmployeePage]
})
export class EmployeePageModule {}
