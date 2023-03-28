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
    expanded: true,
    items: [
      {
        routeLink: 'angular/component',
        label: 'Angular'
      },
      {
        routeLink: 'angular/hooks',
        label: 'Hooks'
      },
      {
        routeLink: 'angular/forms',
        label: 'Forms'
      },
    ]
  },
  {
    routeLink: 'rxjs',
    icon: 'fal fa-chart-bar',
    label: 'RxJS',
    expanded: false,
    items: [
      {
        routeLink: 'rxjs/rxjs',
        label: 'rxjs'
      },
      {
        routeLink: 'rxjs/subject',
        label: 'Subject'
      },
      {
        routeLink: 'rxjs/behavior-subject',
        label: 'BehaviorSubject'
      },
      {
        routeLink: 'rxjs/replay-subject',
        label: 'ReplaySubject'
      },
      {
        routeLink: 'rxjs/async-subject',
        label: 'AsyncSubject'
      },
    ]
  },
  // {
  //   routeLink: 'products',
  //   icon: 'fal fa-box-open',
  //   label: 'Products'
  // },
  // {
  //   routeLink: 'statistics',
  //   icon: 'fal fa-chart-bar',
  //   label: 'Statistics'
  // },
  // {
  //   routeLink: 'coupens',
  //   icon: 'fal fa-tags',
  //   label: 'Coupens'
  // },
  // {
  //   routeLink: 'pages',
  //   icon: 'fal fa-file',
  //   label: 'Pages'
  // },
  // {
  //   routeLink: 'media',
  //   icon: 'fal fa-camera',
  //   label: 'Media'
  // },
  // {
  //   routeLink: 'educations',
  //   icon: 'fa-sharp fa-solid fa-user',
  //   label: 'Educations'
  // },
  {
    routeLink: 'settings',
    icon: 'fal fa-cog',
    label: 'Settings',
    expanded: false,
    items: [
      {
        routeLink: 'settings/profile',
        label: 'Profile'
      },
      {
        routeLink: 'settings/customize',
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
        label: 'Template Level 1.1',
        items: [
          {
            routeLink: 'template/level2.1',
            label: 'Template Level 2.1'
          },
          {
            routeLink: 'template/level2.2',
            label: 'Create Level 2.2',
            items: [
              {
                routeLink: 'template/level3.1',
                label: 'Template Level 3.1'
              },
              {
                routeLink: 'template/level3.2',
                label: 'Create Level 3.2'
              },
            ]
          },
        ]
      },
      {
        routeLink: 'template/level1.2',
        label: 'Create Level 1.2'
      },
    ]
  },
];
