import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './sidenav/dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
  },
  // {path: 'products', component: ProductsComponent},
  // {path: 'statistics', component: StatisticsComponent},
  // {path: 'coupens', component: CoupensComponent},
  // {path: 'pages', component: PagesComponent},
  // {path: 'media', component: MediaComponent},
  // {path: 'educations', component: EducationsComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
