import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from '../@shared/models/sidenav';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'kvn-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0"
        class="sublevel-nav"
        [@submenu]="expanded
            ? {value: 'visible', params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'}}
            : {value: 'hidden', params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '0'}}"
    >
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a *ngIf="item.items && item.items.length > 0"
           (click)="handleClick(item)"
           class="sublevel-nav-link"
           [ngClass]="getActiveClass(item)">
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span *ngIf="collapsed" class="sublevel-link-text">{{item.label}}</span>
          <i *ngIf="item.items && collapsed"
             class="menu-collapse-icon"
             [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'">
          </i>
        </a>

        <a *ngIf="!item.items || (item.items && item.items.length === 0)"
           class="sublevel-nav-link"
           [routerLink]="[item.routeLink]"
           routerLinkActive="active-sublevel"
           [routerLinkActiveOptions]="{exact: true}"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span *ngIf="collapsed" class="sublevel-link-text">{{item.label}}</span>
        </a>

        <div *ngIf="item.items && item.items.length > 0">
          <kvn-sublevel-menu
            [data]="item"
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded">
          </kvn-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['../sidenav/sidenav/sidenav.component.scss'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}),
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animated: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {}

  handleClick(item: any) {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

  getActiveClass(item: INavbarData): string {
    return item.expanded && this.router.url.includes(item.routeLink)
      ? 'active-sublevel'
      : '';
  }
}
