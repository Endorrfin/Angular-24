import { Routes } from '@angular/router';
import { PATHS } from '../../../../../paths.constants';
import { TransformationOperatorsComponent } from './transformation-operators.component';


export const TransformationOperatorsRoute: Routes = [
  { path: '', redirectTo: PATHS.filter, pathMatch: 'full' },
  {
    path: '',
    component: TransformationOperatorsComponent,
    children: [
      {
        path: PATHS.buffer,
        // component: ,
      },
      {
        path: PATHS.groupBy,
        // component: ,
      },
      {
        path: PATHS.pluck,
        // component: ,
      },

    ]
  }
]
