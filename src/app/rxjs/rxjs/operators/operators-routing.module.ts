import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';
import { CreationOperatorsComponent } from './components/creation-operators/creation-operators.component';
import { JoinCreationOperatorsComponent } from './components/join-creation-operators/join-creation-operators.component';
import { TransformationOperatorsComponent } from './components/transformation-operators/transformation-operators.component';
import { FilteringOperatorsComponent } from './components/filtering-operators/filtering-operators.component';


const routes: Routes = [
  {
    path: 'operators',
    component: OperatorsComponent
  },
  {
    path: 'creation-operators',
    component: CreationOperatorsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/creation-operators/creation-operators.route').then((m) => m.CreationOperatorsRoute)
      },
    ],
  },
  {
    path: 'join-creation-operators',
    component: JoinCreationOperatorsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/join-creation-operators/join-creation-operators.route').then((m) => m.JoinCreationOperatorsRoute)
      },
    ],
  },
  {
    path: 'transformation-operators',
    component: TransformationOperatorsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/transformation-operators/transformation-operators.route').then((m) => m.TransformationOperatorsRoute)
      },
    ],
  },
  {
    path: 'filtering-operators',
    component: FilteringOperatorsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/filtering-operators/filtering-operators.route').then((m) => m.FilteringOperatorsRoute)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule {}
