import { INavbarData } from '../../@shared/models/sidenav';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routeLink: 'angular',
    icon: 'fal fa-box-open',
    label: 'Angular',
    expanded: false,
    items: [
      {
        routeLink: 'angular/introduction',
        icon: '',
        label: 'Angular'
      },
      {
        routeLink: 'angular/lifecycle-hooks',
        label: 'Hooks'
      },
      {
        routeLink: 'angular/built-in-directives',
        icon: 'fa fa-asl-interpreting',
        label: 'Built-in directives'
      },
      {
        routeLink: 'angular/custom-directives',
        icon: 'fa fa-american-sign-language-interpreting',
        label: 'Custom directives'
      },
      {
        routeLink: 'angular/decorators',
        icon: '',
        label: 'Decorators'
      },
      {
        routeLink: 'angular/forms',
        icon: 'view_list',
        label: 'Forms'
      },
      {
        routeLink: 'angular/tables',
        icon: '',
        label: 'Tables'
      },
    ]
  },
  {
    routeLink: 'rxjs',
    // icon: 'fal fa-chart-bar',
    icon: 'fa fa-american-sign-language-interpreting',
    label: 'RxJS',
    expanded: false,
    items: [
      {
        routeLink: 'rxjs/rxjs',
        icon: '',
        label: 'rxjs'
      },
      {
        routeLink: 'rxjs/observables',
        icon: '',
        label: 'Observables'
      },
      {
        routeLink: 'rxjs/operators',
        icon: '',
        label: 'Operators',
        items: [
          {
            routeLink: 'rxjs/operators/creation-operators',
            icon: '',
            label: 'Creation Operators'
          },
          {
            routeLink: 'rxjs/operators/join-creation-operators',
            icon: '',
            label: 'Join Creation Operators'
          },
          {
            routeLink: 'rxjs/operators/transformation-operators',
            icon: '',
            label: 'Transformation Operators'
          },
          {
            routeLink: 'rxjs/operators/filtering-operators',
            icon: '',
            label: 'Filtering Operators'
          },
        ]
      },
      {
        routeLink: 'rxjs/higher-order-observables',
        icon: 'fa fa-superpowers',
        label: 'Higher-order Observables'
      },
      {
        routeLink: 'rxjs/subjects',
        icon: '',
        label: 'Subjects'
      },
      {
        routeLink: 'rxjs/subject',
        icon: 'fal fa-home',
        label: 'Subject'
      },
      {
        routeLink: 'rxjs/behavior-subject',
        icon: 'fal fa-home',
        label: 'BehaviorSubject'
      },
      {
        routeLink: 'rxjs/replay-subject',
        icon: 'fal fa-home',
        label: 'ReplaySubject'
      },
      {
        routeLink: 'rxjs/async-subject',
        icon: 'fal fa-home',
        label: 'AsyncSubject'
      },
    ]
  },
  {
    routeLink: 'settings',
    icon: 'fal fa-cog',
    label: 'Settings',
    expanded: false,
    items: [
      {
        routeLink: 'settings/profile',
        icon: '',
        label: 'Profile'
      },
      {
        routeLink: 'settings/customize',
        icon: '',
        label: 'Customize'
      },
    ]
  },
  {
    routeLink: 'template',
    icon: 'fal fa-tags',
    label: 'Template',
    items: [
      {
        routeLink: 'template/level1.1',
        icon: '',
        label: 'Template Level 1.1',
        items: [
          {
            routeLink: 'template/level2.1',
            icon: '',
            label: 'Template Level 2.1'
          },
          {
            routeLink: 'template/level2.2',
            icon: '',
            label: 'Create Level 2.2',
            items: [
              {
                routeLink: 'template/level3.1',
                icon: '',
                label: 'Template Level 3.1'
              },
              {
                routeLink: 'template/level3.2',
                icon: '',
                label: 'Create Level 3.2'
              },
            ]
          },
        ]
      },
      {
        routeLink: 'template/level1.2',
        icon: '',
        label: 'Create Level 1.2'
      },
    ]
  },
];
