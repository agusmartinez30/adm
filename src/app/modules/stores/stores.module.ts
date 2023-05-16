import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoresPageRoutingModule } from './stores-routing.module';

import { StoresPage } from './stores.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    StoresPageRoutingModule,
    NgxDatatableModule,
    IonCustomScrollbarModule
  ],
  declarations: [StoresPage]
})
export class StoresPageModule { }
