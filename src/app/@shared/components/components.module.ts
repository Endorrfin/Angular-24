import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageTabsComponent } from './page-tabs/page-tabs.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './ui-elements/button/button.component';
import { HtmlTooltipPipeModule } from '../pipes/html-tooltip-pipe/html-tooltip-pipe.module';
import { RowTemplateComponent } from './ui-elements/row-template/row-template.component';

export const SHARED_COMPONENTS: Type<any>[] = [LoaderComponent, PageTabsComponent, PageTitleComponent, ButtonComponent, RowTemplateComponent];


@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    LoaderComponent,
    PageTitleComponent,
    PageTabsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HtmlTooltipPipeModule,
  ],
  exports: [
    ...SHARED_COMPONENTS
  ],
})
export class SharedComponentsModule { }
