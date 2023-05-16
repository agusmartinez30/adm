import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamPageRoutingModule } from './team-routing.module';

import { TeamPage } from './team.page';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TeamPageRoutingModule,
    IonCustomScrollbarModule,
    NgxDatatableModule
  ],
  declarations: [TeamPage]
})
export class TeamPageModule {}
