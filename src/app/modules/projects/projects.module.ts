import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsPageRoutingModule } from './projects-routing.module';

import { ProjectsPage } from './projects.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsPageRoutingModule,
    NgxDatatableModule,
    IonCustomScrollbarModule
  ],
  declarations: [ProjectsPage]
})
export class ProjectsPageModule { }
