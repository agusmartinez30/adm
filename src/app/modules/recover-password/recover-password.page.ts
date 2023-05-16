import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormPage } from 'src/app/core/form.page';
import { mailFormat } from 'src/app/core/forms/validators/mailFormat';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage extends FormPage {
  
  getFormNew() {
    return this.formBuilder.group({
      emailAddress: [null, Validators.compose([Validators.required, mailFormat()])],
    });
  }

  onSubmitPerform(item) {
    const endPoint = this.settings.endPoints.administrators + this.settings.endPointsMethods.users.recoverPassword;

    this.pageService.httpPost(endPoint, item)
    .then(res => this.showSuccessAlert())
    .catch(e => this.pageService.showError(e));
  }

  async showSuccessAlert() {
    await this.pageService.createAlertModal({
      title: 'Se ha enviado un mail con un link para recuperar la contraseña',
      actions: [],
      showCloseButton: true
    });

    this.pageService.navigateBack();
  }

}
