import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormPage } from 'src/app/core/form.page';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage extends FormPage {

  adminId: string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.adminId = params.id);
  }

  getFormNew() {
    return this.formBuilder.group({
      password: [null, Validators.required],
      passwordNew: [null, Validators.required],
      passwordNewVerify: [null, Validators.required],
    });
  }

  onSubmitPerform(item) {
    
    const endPoint = this.settings.endPoints.administrators + '/' + this.adminId + this.settings.endPointsMethods.users.changePassword;

    this.pageService.httpPut(endPoint, { body: item })
    .then(res => {
      this.pageService.showSuccess('Contraseña actualizada con éxito!');
      this.pageService.navigateBack();
    }).catch(e => this.pageService.showError(e));
  }

  backAdminDetail(){
    this.pageService.navigateRoute('administrator-detail')
  }
}
