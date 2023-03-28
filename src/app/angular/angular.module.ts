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


@NgModule({
  declarations: [
    AngularComponent,
    // HooksComponent,
    // TabAftercontentcheckedComponent,
    // TabAfterviewinitComponent,
    // TabAfterviewcheckedComponent,
    // TabOndestroyComponent,
    // TabAftercontentinitComponent,
    // TabOnchangesComponent,
    // TabOninitComponent,
    // TabDocheckComponent,

    // FormComponent,
    // TabReactiveFormsComponent,
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
  ]
})
export class AngularModule { }
