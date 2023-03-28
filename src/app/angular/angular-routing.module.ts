import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HooksComponent } from './angular/hooks/hooks.component';
import { FormComponent } from './angular/form/form.component';

const routes: Routes = [
  {
    path: 'component',
    component: AngularComponent,
  },
  {
    path: 'hooks',
    component: HooksComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./angular/hooks/hooks.route').then((m) => m.HooksRoutes)
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
