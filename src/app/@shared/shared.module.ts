import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { SharedComponentsModule } from './components/components.module';
import { RainbowDirective } from './directives/rainbow.directive';
import { HighlightDirective } from './directives/highlight.directive';

const COMMON_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [
    RainbowDirective,
    HighlightDirective,
  ],
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
    RainbowDirective,
    HighlightDirective,
  ]
})
export class SharedModule { }
