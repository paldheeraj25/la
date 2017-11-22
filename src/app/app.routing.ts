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
      }
    ]
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
