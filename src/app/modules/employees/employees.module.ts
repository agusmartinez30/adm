import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeesPageRoutingModule } from './employees-routing.module';

import { EmployeesPage } from './employees.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeesPageRoutingModule,
    NgxDatatableModule,
    IonCustomScrollbarModule
  ],
  declarations: [EmployeesPage]
})
export class EmployeesPageModule { }
