import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,
    IonCustomScrollbarModule,
    NgxDatatableModule
  ],
  declarations: [StorePage]
})
export class StorePageModule {}
