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
        path: '', redirectTo: 'dashboard/analytics', pathMatch: 'full'
      },
      {
        path: 'home',
        canActivate: [AuthGaurd],
        loadChildren: 'app/+home/home.module#HomeModule'
      },
      {
        path: 'dashboard',
        canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
        data: { pageTitle: 'Dashboard' }
      },
      {
        path: 'hire',
        canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        loadChildren: 'app/hire/hire.module#HireModule',
        data: { pageTitle: 'Resources' }
      },
      {
        path: 'product',
        canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        loadChildren: 'app/product/product.module#ProductModule',
        data: { pageTitle: 'Product' }
      },
      {
        path: 'design',
        canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        loadChildren: 'app/design/design.module#DesignModule',
        data: { pageTitle: 'Design' }
      },
      {
        path: 'advertisement',
        canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        loadChildren: 'app/advertisement/advertisement.module#AdvertisementModule',
        data: { pageTitle: 'Advertisement' }
      },
      {
        path: 'user',
        canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        loadChildren: 'app/user/user.module#UserModule',
        data: { pageTitle: 'User' }
      },
      {
        path: 'flowers',
        canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        loadChildren: 'app/flowers/flowers.module#FlowersModule',
      }
    ]
  },
  { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule' },
  { path: '**', redirectTo: 'auth' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
