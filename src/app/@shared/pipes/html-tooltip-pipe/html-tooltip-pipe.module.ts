import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlTooltopPipe } from './html-tooltip.pipe';


@NgModule({
  declarations: [
    HtmlTooltopPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HtmlTooltopPipe
  ]
})
export class HtmlTooltipPipeModule { }
