import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecoverPasswordPageRoutingModule } from './recover-password-routing.module';
import { RecoverPasswordPage } from './recover-password.page';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RecoverPasswordPageRoutingModule,
    IonCustomScrollbarModule
  ],
  declarations: [RecoverPasswordPage]
})
export class RecoverPasswordPageModule {}
