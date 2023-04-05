import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { DecoratorsComponent } from './decorators.component';
import { TabIntroDecoratorsComponent } from './tab-introduction/tab-intro-decorators.component';
import { TabInputComponent } from './tab-input/tab-input.component';
import { TabOutputComponent } from './tab-output/tab-output.component';
import { TabViewchildComponent } from './tab-viewchild/tab-viewchild.component';
import { TabViewchildrenComponent } from './tab-viewchildren/tab-viewchildren.component';
import { TabContentchildComponent } from './tab-contentchild/tab-contentchild.component';
import { TabContentchildrenComponent } from './tab-contentchildren/tab-contentchildren.component';
import { TabHostbindingComponent } from './tab-hostbinding/tab-hostbinding.component';
import { TabHostlistenerComponent } from './tab-hostlistener/tab-hostlistener.component';


export const DecoratorsRoutes: Routes = [
  { path: '', redirectTo: PATHS.introductionDecorators, pathMatch: 'full' },
  {
    path: '',
    component: DecoratorsComponent,
    children: [
      {
        path: PATHS.introductionDecorators,
        component: TabIntroDecoratorsComponent,
      },
      {
        path: PATHS.inputDecorators,
        component: TabInputComponent,
      },
      {
        path: PATHS.outputDecorators,
        component: TabOutputComponent,
      },

      {
        path: PATHS.viewChildDecorators,
        component: TabViewchildComponent,
      },
      {
        path: PATHS.viewChildrenDecorators,
        component: TabViewchildrenComponent,
      },
      {
        path: PATHS.contentChildDecorators,
        component: TabContentchildComponent,
      },
      {
        path: PATHS.contentChildrenDecorators,
        component: TabContentchildrenComponent,
      },
      {
        path: PATHS.hostBindingDecorators,
        component: TabHostbindingComponent,
      },
      {
        path: PATHS.hostListenerDecorators,
        component: TabHostlistenerComponent,
      },
    ],
  },
]
