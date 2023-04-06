import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { ObservablesComponent } from './observables.component';
import { TabIntroAsynchronyComponent } from './components/tab-intro-asynchrony/tab-intro-asynchrony.component';
import { TabPromisesComponent } from './components/tab-promises/tab-promises.component';
import { TabObservablesComponent } from './components/tab-observables/tab-observables.component';


export const ObservablesRoute: Routes = [
  { path: '', redirectTo: PATHS.introductionAsynchrony, pathMatch: 'full' },
  {
    path: '',
    component: ObservablesComponent,
    children: [
      {
        path: PATHS.introductionAsynchrony,
        component: TabIntroAsynchronyComponent,
      },
      {
        path: PATHS.promises,
        component: TabPromisesComponent,
      },
      {
        path: PATHS.observables,
        component: TabObservablesComponent,
      },

    ]
  }
]
