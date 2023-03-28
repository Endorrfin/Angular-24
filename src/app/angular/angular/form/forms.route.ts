import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { FormComponent } from './form.component';
import { TabReactiveFormsComponent } from './tab-reactive-forms/tab-reactive-forms.component';
import { TabTemplateDrivenFormsComponent } from './tab-template-driven-forms/tab-template-driven-forms.component';


export const FormsRoutes: Routes = [
  { path: '', redirectTo: PATHS.reactive, pathMatch: 'full' },
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: PATHS.reactive,
        component: TabReactiveFormsComponent,
      },
      {
        path: PATHS.template,
        component: TabTemplateDrivenFormsComponent,
      },

    ],
  },
]
