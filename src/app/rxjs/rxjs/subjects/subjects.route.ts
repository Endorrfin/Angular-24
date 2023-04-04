import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { SubjectsComponent } from './subjects.component';
import { TabIntroSubjectsComponent } from './components/tab-intro-subjects/tab-intro-subjects.component';
import { TabSubjectComponent } from './components/tab-subject/tab-subject.component';
import { TabBehaviorSubjectComponent } from './components/tab-behavior-subject/tab-behavior-subject.component';
import { TabAsyncSubjectComponent } from './components/tab-async-subject/tab-async-subject.component';
import { TabReplaySubjectComponent } from './tab-replay-subject/tab-replay-subject.component';


export const SubjectsRoute: Routes = [
  { path: '', redirectTo: PATHS.introduction, pathMatch: 'full' },
  {
    path: '',
    component: SubjectsComponent,
    children: [
      {
        path: PATHS.introsubjects,
        component: TabIntroSubjectsComponent,
      },
      {
        path: PATHS.subject,
        component: TabSubjectComponent,
      },
      {
        path: PATHS.behaviorsubject,
        component: TabBehaviorSubjectComponent,
      },
      {
        path: PATHS.asyncSubject,
        component: TabAsyncSubjectComponent,
      },
      {
        path: PATHS.replaySubject,
        component: TabReplaySubjectComponent,
      },
    ]
  }
]
