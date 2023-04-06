import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { HigherOrderObservablesComponent } from './higher-order-observables.component';
import { TabIntroHigherOrderObservablesComponent } from './components/tab-intro-higher-order-observables/tab-intro-higher-order-observables.component';
import { TabConcatMapComponent } from './components/tab-concat-map/tab-concat-map.component';
import { TabMergeMapComponent } from './components/tab-merge-map/tab-merge-map.component';
import { TabExhaustMapComponent } from './components/tab-exhaust-map/tab-exhaust-map.component';
import { TabSwitchMapComponent } from './components/tab-switch-map/tab-switch-map.component';
import { TabMapComponent } from './components/tab-map/tab-map.component';
import { TabFlatMapComponent } from './components/tab-flat-map/tab-flat-map.component';


export const HigherOrderObservablesRoute: Routes = [
  { path: '', redirectTo: PATHS.introductionHigherOrderObservables, pathMatch: 'full' },
  {
    path: '',
    component: HigherOrderObservablesComponent,
    children: [
      {
        path: PATHS.introductionHigherOrderObservables,
        component: TabIntroHigherOrderObservablesComponent,
      },
      {
        path: PATHS.map,
        component: TabMapComponent,
      },
      {
        path: PATHS.concatMap,
        component: TabConcatMapComponent,
      },
      {
        path: PATHS.mergeMap,
        component: TabMergeMapComponent,
      },
      {
        path: PATHS.flatMap,
        component: TabFlatMapComponent,
      },
      {
        path: PATHS.exhaustMap,
        component: TabExhaustMapComponent,
      },
      {
        path: PATHS.switchMap,
        component: TabSwitchMapComponent,
      },
    ]
  }
]
