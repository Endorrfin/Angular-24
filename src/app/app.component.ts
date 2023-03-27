import { Component } from '@angular/core';
import { ISidenav } from './@shared/models/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-24';

  isSideNavCollapsed = false;
  screenWidth = 0;


  onToggleSideNav(data: ISidenav): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
