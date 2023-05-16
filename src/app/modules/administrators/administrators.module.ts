import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministratorsPageRoutingModule } from './administrators-routing.module';

import { AdministratorsPage } from './administrators.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AdministratorsPageRoutingModule,
    NgxDatatableModule,
    IonCustomScrollbarModule
  ],
  declarations: [AdministratorsPage]
})
export class AdministratorsPageModule { }
