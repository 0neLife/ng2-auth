import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login-module/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/user-auth-guard.service';
import { FirstPageComponent } from './first-page-module/first-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
  {
    path: 'first-page',
    pathMatch: 'full',
    canActivate: [AuthGuardService],
    component: FirstPageComponent,
    loadChildren: () => import('./first-page-module/first-page.module').then(m => m.FirstPageModule)
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
    loadChildren: () => import('./login-module/login.module').then(m => m.LoginModule)
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
