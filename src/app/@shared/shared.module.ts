import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { SharedComponentsModule } from './components/components.module';

const COMMON_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [
    ...COMMON_MODULES,
    MaterialModule,
    CommonModule,
    SharedComponentsModule,
  ],
  exports: [
    ...COMMON_MODULES,
    MaterialModule,
    SharedComponentsModule,
  ]
})
export class SharedModule { }
