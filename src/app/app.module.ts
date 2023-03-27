import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './@core/core.module';
import { AngularModule } from './angular/angular.module';
import { RxjsModule } from './rxjs/rxjs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SidenavModule,
    AngularModule,
    RxjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
