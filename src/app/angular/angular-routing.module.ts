import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HooksComponent } from './angular/hooks/hooks.component';
import { FormComponent } from './angular/form/form.component';
import { DecoratorsComponent } from './angular/decorators/decorators.component';
import { BuiltInDirectivesComponent } from './angular/built-in-directives/built-in-directives.component';
import { CustomDirectivesComponent } from './angular/custom-directives/custom-directives.component';

const routes: Routes = [
  {
    path: 'introduction',
    component: AngularComponent,
  },
  {
    path: 'hooks-cycle',
    component: HooksComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./angular/hooks/hooks.route').then((m) => m.HooksRoutes)
      },
    ],
  },
  {
    path: 'built-in-directives',
    component: BuiltInDirectivesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./angular/built-in-directives/built-in-directives.route').then((m) => m.BuiltInDirectivesRoutes)
      },
    ],
  },
  {
    path: 'custom-directives',
    component: CustomDirectivesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./angular/custom-directives/custom-directives.route').then((m) => m.CustomDirectivesRoutes)
      },
    ],
  },
  {
    path: 'decorators',
    component: DecoratorsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./angular/decorators/decorators.route').then((m) => m.DecoratorsRoutes)
      },
    ],
  },
  {
    path: 'forms',
    component: FormComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./angular/form/forms.route').then((m) => m.FormsRoutes)
      },
    ],
  },
  {
    path: 'HooksRoute',
    component: HooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule {}
