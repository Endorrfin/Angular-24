import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs-routing.module';

import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';




@NgModule({
  declarations: [
    RxjsComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  exports: [],
})
export class RxjsModule { }
