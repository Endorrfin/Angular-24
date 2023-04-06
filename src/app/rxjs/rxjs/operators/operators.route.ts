import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { OperatorsComponent } from './operators.component';
import { CreationOperatorsComponent } from './components/creation-operators/creation-operators.component';
import { JoinCreationOperatorsComponent } from './components/join-creation-operators/join-creation-operators.component';
import { TransformationOperatorsComponent } from './components/transformation-operators/transformation-operators.component';
import { FilteringOperatorsComponent } from './components/filtering-operators/filtering-operators.component';


export const OperatorsRoute: Routes = [
  { path: '', redirectTo: PATHS.creationOperators, pathMatch: 'full' },
  {
    path: '',
    component: OperatorsComponent,
    children: [
      {
        path: PATHS.creationOperators,
        component: CreationOperatorsComponent,
      },
      {
        path: PATHS.joinCreationOperators,
        component: JoinCreationOperatorsComponent,
      },
      {
        path: PATHS.transformationOperators,
        component: TransformationOperatorsComponent,
      },
      {
        path: PATHS.filteringOperators,
        component: FilteringOperatorsComponent,
      },
    ]
  }
]
