import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';

const routes: Routes = [
  {
    path: 'rxjs',
    component: RxjsComponent
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
