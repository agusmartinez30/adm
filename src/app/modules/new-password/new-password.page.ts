import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormPage } from 'src/app/core/form.page';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage extends FormPage {

  recoverPasswordID: string;
  userId: string;
  role: string;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.recoverPasswordID = params.recoverPasswordID;
      this.userId = params.id;
      this.role = params.role;
    });
  }

  getFormNew() {
    return this.formBuilder.group( {
      password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      passwordVerify: [null, Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  onSubmitPerform(item) {
    const endPoint = this.settings.endPoints[this.role === 'user' ? 'users' : 'administrators'] + this.settings.endPointsMethods.users.newPassword;

    item.recoverPasswordID = this.recoverPasswordID;
    item.id = this.userId;

    this.pageService.httpPut(endPoint, { body: item })
    .then(res => {
      this.pageService.showSuccess('Contraseña actualizada!');
      this.pageService.navigateRoute('login');
    }).catch(e => this.pageService.showError(e));
  }
}
