import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';
import { SubjectsComponent } from './rxjs/subjects/subjects.component';
import { AuthGuard } from '../@shared/guards/auth.guard';
import { RoleGuard } from '../@shared/guards/role.guard';
import { NotCompleteGuard } from '../@shared/guards/not-complete.guard';
import { AbilityGuard } from '../@shared/guards/ability.guard';
import { ResolveGuard } from '../@shared/guards/resolve.guard';

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
    component: BehaviorSubjectComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'replay-subject',
    component: ReplaySubjectComponent,
    // canActivateChild: [RoleGuard],
  },
  {
    path: 'async-subject',
    component: AsyncSubjectComponent,
    // canDeactivate: [NotCompleteGuard],
    // canLoad: [AbilityGuard],
    // resolve: {data: ResolveGuard },
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {}
