import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderPage } from './header';

const routes: Routes = [
  {
    path: '',
    component: HeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderPageRoutingModule { }
