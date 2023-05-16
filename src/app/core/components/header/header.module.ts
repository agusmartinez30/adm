import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderPageRoutingModule } from './header-routing.module';

import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageRoutingModule,
    PipesModule,
    NgScrollbarModule,
    IonCustomScrollbarModule
  ],
})
export class HeaderPageModule { }
