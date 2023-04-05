import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs-routing.module';

import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';
import { ChildSubjectComponent } from './rxjs/subjects/components/tab-subject/components/child-subject/child-subject.component';
import { ParentSubjectComponent } from './rxjs/subjects/components/tab-subject/components/parent-subject/parent-subject.component';
import { SiblingOneBehaviorSubjectComponent } from './rxjs/subjects/components/tab-behavior-subject/components/sibling-one-behavior-subject/sibling-one-behavior-subject.component';
import { ParentBehaviorSubjectComponent } from './rxjs/subjects/components/tab-behavior-subject/components/parent-behavior-subject/parent-behavior-subject.component';
import { SiblingTwoBehaviorSubjectComponent } from './rxjs/subjects/components/tab-behavior-subject/components/sibling-two-behavior-subject/sibling-two-behavior-subject.component';
import { SharedModule } from '../@shared/shared.module';


@NgModule({
  declarations: [
    RxjsComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ChildSubjectComponent,
    ParentSubjectComponent,
    ParentBehaviorSubjectComponent,
    SiblingOneBehaviorSubjectComponent,
    SiblingTwoBehaviorSubjectComponent,
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    SharedModule
  ],
  exports: [
    ParentBehaviorSubjectComponent,
    ParentSubjectComponent
  ],
})
export class RxjsModule {}
