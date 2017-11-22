import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ModuleWithProviders } from "@angular/core";

export const productRoutes: Routes = [
  {
    path: 'create',
    component: ProductComponent,
    data: {
      pageTitle: 'Product'
    }
  },
  {
    path: 'list',
    component: ProductListComponent,
    data: {
      pageTitle: 'Product List'
    }
  }
];

export const productRouting: ModuleWithProviders = RouterModule.forChild(productRoutes);

