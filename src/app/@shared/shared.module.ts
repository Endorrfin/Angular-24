import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMMON_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [
    ...COMMON_MODULES,
    CommonModule,
    SharedComponentsModule,
  ],
  exports: [
    ...COMMON_MODULES,
    SharedComponentsModule,
  ]
})
export class SharedModule { }
