import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { ModuleWithProviders } from "@angular/core";
import { AuthGaurd } from './providers/auth/auth.gaurd';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'auth/login', pathMatch: 'full'
      },
      // {
      //   path: 'home',
      //   canActivate: [AuthGaurd],
      //   loadChildren: 'app/+home/home.module#HomeModule'
      // },
      {
        path: 'dashboard',
        canActivate: [AuthGaurd],
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
        canActivate: [AuthGaurd],
        loadChildren: 'app/design/design.module#DesignModule',
        data: { pageTitle: 'Design' }
      },
      {
        path: 'advertisement',
        canActivate: [AuthGaurd],
        loadChildren: 'app/advertisement/advertisement.module#AdvertisementModule',
        data: { pageTitle: 'Advertisement' }
      },
      {
        path: 'user',
        canActivate: [AuthGaurd],
        loadChildren: 'app/user/user.module#UserModule',
        data: { pageTitle: 'User' }
      }
    ]
  },
  { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule' },
  { path: '**', redirectTo: 'auth' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
