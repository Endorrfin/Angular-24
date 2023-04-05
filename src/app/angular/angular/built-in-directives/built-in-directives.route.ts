import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { BuiltInDirectivesComponent } from './built-in-directives.component';
import { TabIntroBuildInDirectivesComponent } from './components/tab-intro-build-in-directives/tab-intro-build-in-directives.component';
import { TabAttributeDirectivesComponent } from './components/tab-attribute-directives/tab-attribute-directives.component';
import { TabStructuralDirectivesComponent } from './components/tab-structural-directives/tab-structural-directives.component';


export const BuiltInDirectivesRoutes: Routes = [
  { path: '', redirectTo: PATHS.introductionBuiltInDirectives, pathMatch: 'full' },
  {
    path: '',
    component: BuiltInDirectivesComponent,
    children: [
      {
        path: PATHS.introductionBuiltInDirectives,
        component: TabIntroBuildInDirectivesComponent
      },
      {
        path: PATHS.attributeDirectives,
        component: TabAttributeDirectivesComponent
      },
      {
        path: PATHS.structuralDirectives,
        component: TabStructuralDirectivesComponent
      },
    ]
  },
]
