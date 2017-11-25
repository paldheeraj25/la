/**
 * Created by griga on 7/11/16.
 */


import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: 'app/+home/home.module#HomeModule'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
        data: { pageTitle: 'Dashboard' }
      },
      {
        path: 'product',
        loadChildren: 'app/product/product.module#ProductModule',
        data: { pageTitle: 'Product' }
      },
      {
        path: 'design',
        loadChildren: 'app/design/design.module#DesignModule',
        data: { pageTitle: 'Design' }
      },
      {
        path: 'advertisement',
        loadChildren: 'app/advertisement/advertisement.module#AdvertisementModule',
        data: { pageTitle: 'Advertisement' }
      },
      {
        path: 'user',
        loadChildren: 'app/user/user.module#UserModule',
        data: { pageTitle: 'User' }
      }
    ]
  },
  { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule' },
  { path: '**', redirectTo: 'auth' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
