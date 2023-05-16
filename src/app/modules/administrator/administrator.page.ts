import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ItemPage } from 'src/app/core/item.page';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage extends ItemPage {

  endPoint: string = this.settings.endPoints.administrators;
  showPassword = false;
  showPassword1 = false;

  getFormNew() {
    return this.formBuilder.group({
      emailAddress: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      passwordVerify: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      emailAddress: [item.emailAddress, Validators.compose([Validators.required, Validators.email])],
    });
  }

  savePre(item: any): { [k: string]: any; } {
    item.username = item.emailAddress;
    return item;
  }

  goChangePassword() {
    this.pageService.navigateRoute('change-password/' + this.item.id);
  }

  async recoverPassword() {

    const isSure = await this.pageService.createAlertModal({
      title: '¿Está seguro que desea enviar un link por correo electrónico para recuperar la contraseña de este administrador?',
      subtitle: this.item.emailAddress,
      actions: [
        {
          label: 'Si',
          handler: () => this.pageService.modalCtrl.dismiss(true)
        },
        {
          label: 'No',
          handler: () => this.pageService.modalCtrl.dismiss(false)
        },
      ]
    });

    if (!isSure) return;

    const endPoint = this.settings.endPoints.administrators + this.settings.endPointsMethods.users.recoverPassword;

    this.pageService.httpPost(endPoint, { emailAddress: this.item.emailAddress })
      .then(res => this.showSuccessAlert())
      .catch(e => this.pageService.showError(e));
  }

  async showSuccessAlert() {
    await this.pageService.createAlertModal({
      title: 'Se ha enviado un mail con un link para recuperar la contraseña',
      actions: [],
      showCloseButton: true
    });
  }

}
