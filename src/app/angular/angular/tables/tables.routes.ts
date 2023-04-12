import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { TablesComponent } from './tables.component';
import { TabMatTableComponent } from './components/tab-mat-table/tab-mat-table.component';
import { TabTrackByComponent } from './components/tab-track-by/tab-track-by.component';


export const TablesRoutes: Routes = [
  { path: '', redirectTo: PATHS.introductionDecorators, pathMatch: 'full' },
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: PATHS.matTable,
        component: TabMatTableComponent,
      },
      {
        path: PATHS.trackBy,
        component: TabTrackByComponent,
      },
    ],
  },
]
