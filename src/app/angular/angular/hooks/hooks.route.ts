import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { HooksComponent } from './hooks.component';
import { TabOnchangesComponent } from './tab-onchanges/tab-onchanges.component';
import { TabOninitComponent } from './tab-oninit/tab-oninit.component';
import { TabDocheckComponent } from './tab-docheck/tab-docheck.component';
import { TabAftercontentinitComponent } from './tab-aftercontentinit/tab-aftercontentinit.component';
import { TabAftercontentcheckedComponent } from './tab-aftercontentchecked/tab-aftercontentchecked.component';
import { TabAfterviewinitComponent } from './tab-afterviewinit/tab-afterviewinit.component';
import { TabAfterviewcheckedComponent } from './tab-afterviewchecked/tab-afterviewchecked.component';
import { TabOndestroyComponent } from './tab-ondestroy/tab-ondestroy.component';
import { TabIntroductionComponent } from './tab-introduction/tab-introduction.component';

export const HooksRoutes: Routes = [
  { path: '', redirectTo: PATHS.introduction, pathMatch: 'full' },
  {
    path: '',
    component: HooksComponent,
    children: [
      {
        path: PATHS.introduction,
        component: TabIntroductionComponent,
      },
      {
        path: PATHS.onchanges,
        component: TabOnchangesComponent,
      },
      {
        path: PATHS.oninit,
        component: TabOninitComponent,
      },
      {
        path: PATHS.docheck,
        component: TabDocheckComponent,
      },
      {
        path: PATHS.aftercontentinit,
        component: TabAftercontentinitComponent,
      },
      {
        path: PATHS.aftercontentchecked,
        component: TabAftercontentcheckedComponent,
      },
      {
        path: PATHS.afterviewinit,
        component: TabAfterviewinitComponent,
      },
      {
        path: PATHS.afterviewchecked,
        component: TabAfterviewcheckedComponent,
      },
      {
        path: PATHS.ondestroy,
        component: TabOndestroyComponent,
      },
    ],
  },
]
