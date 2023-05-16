import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ng2-tooltip-directive';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { environment } from 'src/environments/environment';
import { Settings } from './app.settings';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ComponentsModule } from './core/components/components.module';

const config: SocketIoConfig = { url: environment.socketUrl, options: { reconnection: Settings.SOCKET_ENABLED, query: {} } };

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({
      mode: 'md'
    }),
    AppRoutingModule,
    PipesModule,
    NgxDatatableModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TooltipModule,
    IonCustomScrollbarModule,
    PerfectScrollbarModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
