import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';

import { AngularComponent } from './angular/angular.component';
import { HooksComponent } from './angular/hooks/hooks.component';
import { TabOninitComponent } from './angular/hooks/tab-oninit/tab-oninit.component';
import { TabOnchangesComponent } from './angular/hooks/tab-onchanges/tab-onchanges.component';
import { TabDocheckComponent } from './angular/hooks/tab-docheck/tab-docheck.component';
import { TabAftercontentinitComponent } from './angular/hooks/tab-aftercontentinit/tab-aftercontentinit.component';
import { TabAftercontentcheckedComponent } from './angular/hooks/tab-aftercontentchecked/tab-aftercontentchecked.component';
import { TabAfterviewinitComponent } from './angular/hooks/tab-afterviewinit/tab-afterviewinit.component';
import { TabAfterviewcheckedComponent } from './angular/hooks/tab-afterviewchecked/tab-afterviewchecked.component';
import { TabOndestroyComponent } from './angular/hooks/tab-ondestroy/tab-ondestroy.component';
import { FormComponent } from './angular/form/form.component';
import { TabReactiveFormsComponent } from './angular/form/tab-reactive-forms/tab-reactive-forms.component';
import { TabIntroductionComponent } from './angular/hooks/tab-introduction/tab-introduction.component';
import { ParentComponent } from './angular/hooks/tab-introduction/components/parent/parent.component';
import { ChildComponent } from './angular/hooks/tab-introduction/components/child/child.component';
import { DecoratorsComponent } from './angular/decorators/decorators.component';
import { TabIntroDecoratorsComponent } from './angular/decorators/tab-introduction/tab-intro-decorators.component';
import { TabInputComponent } from './angular/decorators/tab-input/tab-input.component';
import { ChildInputDecoratorComponent } from './angular/decorators/tab-input/components/child-decorator/child-input-decorator.component';
import { ParentInputDecoratorComponent } from './angular/decorators/tab-input/components/parent-decorator/parent-input-decorator.component';
import { SharedModule } from '../@shared/shared.module';


@NgModule({
  declarations: [
    AngularComponent,
    // TabIntroDecoratorsComponent,
    // HooksComponent,
    // TabAftercontentcheckedComponent,
    // TabAfterviewinitComponent,
    // TabAfterviewcheckedComponent,
    // TabOndestroyComponent,
    // TabAftercontentinitComponent,
    // TabOnchangesComponent,
    // TabOninitComponent,
    // TabDocheckComponent,
    ParentComponent,
    ChildComponent,
    ChildInputDecoratorComponent,
    ParentInputDecoratorComponent,
    // DecoratorsComponent,
    // TabIntroDecoratorsComponent,
    // InputComponent,
    // TabInputComponent,

    // FormComponent,
    // TabReactiveFormsComponent,
  ],
  exports: [
    ParentComponent,
    ParentInputDecoratorComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    SharedModule,
  ]
})
export class AngularModule { }
