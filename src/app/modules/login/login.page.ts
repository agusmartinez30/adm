import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormPage } from 'src/app/core/form.page';
import 'animate.css';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends FormPage {
  showPassword: boolean;

  getFormNew() {
    return this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  onSubmitPerform(item) {
    const endPoint = this.settings.endPoints.administrators + this.settings.endPointsMethods.administrators.login;

    this.pageService.httpPost(endPoint, item)
      .then(res => {
        this.global.saveUser(res.data);
        this.pageService.showSuccess('Bienvenido!');
        this.pageService.navigateToHome();
        this.formReset();
      }).catch(e => this.pageService.showError(e));
  }

  goToRecoverPassword() {
    this.formReset();
    this.pageService.navigateRoute("recover-password");
  }

}
