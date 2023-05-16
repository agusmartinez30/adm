import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StagePageRoutingModule } from './stage-routing.module';

import {  StagePage } from './stage.page';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    StagePageRoutingModule,
    IonCustomScrollbarModule,
    NgxDatatableModule
  ],
  declarations: [StagePage]
})
export class StagePageModule {}
