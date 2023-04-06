import { Routes } from '@angular/router';
import { PATHS } from '../../../../../paths.constants';
import { FilteringOperatorsComponent } from './filtering-operators.component';


export const FilteringOperatorsRoute: Routes = [
  { path: '', redirectTo: PATHS.introductionJoinCreationOperators, pathMatch: 'full' },
  {
    path: '',
    component: FilteringOperatorsComponent,
    children: [
      {
        path: PATHS.filter,
        // component: ,
      },
      {
        path: PATHS.debounce,
        // component: ,
      },
      {
        path: PATHS.debounceTime,
        // component: ,
      },

    ]
  }
]
