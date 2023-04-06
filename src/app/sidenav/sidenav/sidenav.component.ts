import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData, ISidenav } from '../../@shared/models/sidenav';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
import { fadeInOut } from './helper';

@Component({
  selector: 'kvn-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       style({opacity: 0}),
  //       animate('350ms',
  //         style({opacity: 1})
  //       )
  //     ]),
  //     transition(':leave', [
  //       style({opacity: 0}),
  //       animate('350ms',
  //         style({opacity: 1})
  //       )
  //     ])
  //   ]),
  //   trigger('rotate', [
  //     transition(':enter', [
  //       animate('1000ms',
  //         keyframes([
  //           style({transform: 'rotate(0deg)', offset: '0'}),
  //           style({transform: 'rotate(2turn)', offset: '1'}),
  //         ]))
  //     ])
  //   ])
  // ]
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<ISidenav> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  constructor(
    public route: Router
  ) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  getActiveClass(data: INavbarData): string {
    return this.route.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    // debugger;
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }

}
