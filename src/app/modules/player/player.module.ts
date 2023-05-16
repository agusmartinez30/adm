import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { PlayerPage } from './player.page';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PlayerPageRoutingModule } from './player-routing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerPageRoutingModule,
    IonCustomScrollbarModule,
    NgxDatatableModule
  ],
  declarations: [PlayerPage]
})
export class PlayerPageModule {}
