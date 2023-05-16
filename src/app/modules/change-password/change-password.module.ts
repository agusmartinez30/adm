import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChangePasswordPageRoutingModule } from './change-password-routing.module';
import { ChangePasswordPage } from './change-password.page';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ChangePasswordPageRoutingModule,
    IonCustomScrollbarModule
  ],
  declarations: [ChangePasswordPage]
})
export class ChangePasswordPageModule {}
