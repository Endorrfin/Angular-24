import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { HooksComponent } from './hooks.component';
import { TabIntroductionHooksComponent } from './tab-introduction/tab-introduction-hooks.component';
import { TabOnchangesComponent } from './tab-onchanges/tab-onchanges.component';
import { TabOninitComponent } from './tab-oninit/tab-oninit.component';
import { TabDocheckComponent } from './tab-docheck/tab-docheck.component';
import { TabAftercontentinitComponent } from './tab-aftercontentinit/tab-aftercontentinit.component';
import { TabAftercontentcheckedComponent } from './tab-aftercontentchecked/tab-aftercontentchecked.component';
import { TabAfterviewinitComponent } from './tab-afterviewinit/tab-afterviewinit.component';
import { TabAfterviewcheckedComponent } from './tab-afterviewchecked/tab-afterviewchecked.component';
import { TabOndestroyComponent } from './tab-ondestroy/tab-ondestroy.component';

export const HooksRoutes: Routes = [
  { path: '', redirectTo: PATHS.introductionHooks, pathMatch: 'full' },
  {
    path: '',
    component: HooksComponent,
    children: [
      {
        path: PATHS.introductionHooks,
        component: TabIntroductionHooksComponent,
      },
      {
        path: PATHS.onChanges,
        component: TabOnchangesComponent,
      },
      {
        path: PATHS.onInit,
        component: TabOninitComponent,
      },
      {
        path: PATHS.doCheck,
        component: TabDocheckComponent,
      },
      {
        path: PATHS.afterContentInit,
        component: TabAftercontentinitComponent,
      },
      {
        path: PATHS.afterContentChecked,
        component: TabAftercontentcheckedComponent,
      },
      {
        path: PATHS.afterViewInit,
        component: TabAfterviewinitComponent,
      },
      {
        path: PATHS.afterViewChecked,
        component: TabAfterviewcheckedComponent,
      },
      {
        path: PATHS.onDestroy,
        component: TabOndestroyComponent,
      },
    ],
  },
]
