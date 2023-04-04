import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';
import { SubjectsComponent } from './rxjs/subjects/subjects.component';

const routes: Routes = [
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./rxjs/subjects/subjects.route').then((m) => m.SubjectsRoute)
      },
    ],
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'behavior-subject',
    component: BehaviorSubjectComponent
  },
  {
    path: 'replay-subject',
    component: ReplaySubjectComponent
  },
  {
    path: 'async-subject',
    component: AsyncSubjectComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {}
