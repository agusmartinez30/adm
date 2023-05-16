import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { TablePage } from './table/table';
import { HeaderPage } from './header/header';
import { AlertModalPage } from './alert-modal/alert-modal';
import { FilterPopoverPage } from './filter-popover/filter-popover.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        NgxDatatableModule
    ],
    declarations: [
        TablePage,
        HeaderPage,
        AlertModalPage,
        FilterPopoverPage
    ],
    exports: [
        TablePage,
        HeaderPage,
        AlertModalPage,
        FilterPopoverPage
    ]
})
export class ComponentsModule { }