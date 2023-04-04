import { Routes } from '@angular/router';
import { DecoratorsComponent } from './decorators.component';
import { PATHS } from '../../../paths.constants';
import { TabIntroDecoratorsComponent } from './tab-introduction/tab-intro-decorators.component';
import { TabInputComponent } from './tab-input/tab-input.component';
import { TabOutputComponent } from './tab-output/tab-output.component';


export const DecoratorsRoutes: Routes = [
  { path: '', redirectTo: PATHS.introduction, pathMatch: 'full' },
  {
    path: '',
    component: DecoratorsComponent,
    children: [
      {
        path: PATHS.introductiondecorators,
        component: TabIntroDecoratorsComponent,
      },
      {
        path: PATHS.input,
        component: TabInputComponent,
      },
      {
        path: PATHS.output,
        component: TabOutputComponent,
      },
    ],
  },
]
