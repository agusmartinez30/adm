import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PlayersPageRoutingModule } from "./players-routing.module";

import { PlayersPage } from "./players.page";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { IonCustomScrollbarModule } from "ion-custom-scrollbar";
import { ComponentsModule } from "src/app/core/components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersPageRoutingModule,
    NgxDatatableModule,
    IonCustomScrollbarModule,
  ],
  declarations: [PlayersPage],
})
export class PlayersPageModule {}
