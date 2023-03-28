import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SublevelMenuComponent } from './sublevel-menu.component';



@NgModule({
  declarations: [
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    SublevelMenuComponent,
  ],
  exports: [
    SidenavComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ]
})
export class SidenavModule { }
