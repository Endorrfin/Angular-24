import { Routes } from '@angular/router';
import { PATHS } from '../../../../../paths.constants';
import { JoinCreationOperatorsComponent } from './join-creation-operators.component';
import { TabIntroJoinCreationOperatorsComponent } from './components/tab-intro-join-creation-operators/tab-intro-join-creation-operators.component';
import { TabForkjoinComponent } from './components/tab-forkjoin/tab-forkjoin.component';


export const JoinCreationOperatorsRoute: Routes = [
  { path: '', redirectTo: PATHS.buffer, pathMatch: 'full' },
  {
    path: '',
    component: JoinCreationOperatorsComponent,
    children: [
      {
        path: PATHS.introductionJoinCreationOperators,
        component: TabIntroJoinCreationOperatorsComponent,
      },
      {
        path: PATHS.forkJoin,
        component: TabForkjoinComponent,
      },
      {
        path: PATHS.combineLatest,
        // component: ,
      },

    ]
  }
]
