import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageTabsComponent } from './page-tabs/page-tabs.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

export const SHARED_COMPONENTS: Type<any>[] = [LoaderComponent, PageTabsComponent, PageTitleComponent];


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
  ],
  exports: [
    ...SHARED_COMPONENTS
  ],
})
export class SharedComponentsModule { }
