import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewPasswordPageRoutingModule } from './new-password-routing.module';
import { NewPasswordPage } from './new-password.page';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    NewPasswordPageRoutingModule,
    IonCustomScrollbarModule
  ],
  declarations: [NewPasswordPage]
})
export class NewPasswordPageModule {}
