import { Routes } from '@angular/router';
import { PATHS } from '../../../../../paths.constants';
import { CreationOperatorsComponent } from './creation-operators.component';


export const CreationOperatorsRoute: Routes = [
  { path: '', redirectTo: PATHS.defer, pathMatch: 'full' },
  {
    path: '',
    component: CreationOperatorsComponent,
    children: [
      {
        path: PATHS.defer,
        // component: ,
      },
      {
        path: PATHS.empty,
        // component: ,
      },
      {
        path: PATHS.from,
        // component: ,
      },

    ]
  }
]
