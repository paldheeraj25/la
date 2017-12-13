import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./product.component";
import { JewelComponent } from "./jewel/jewel.component";
import { JewelListComponent } from './jewel-list/jewel-list.component';
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
  },
  {
    path: 'jewel/list',
    component: JewelListComponent,
    data: {
      pageTitle: 'Jewel list'
    }
  },
  {
    path: 'jewel/create',
    component: JewelComponent,
    data: {
      pageTitle: 'Jewel create'
    }
  },
  {
    path: 'jewel/:id',
    component: JewelComponent,
    data: {
      pageTitle: 'Jewel create'
    }
  }
];

export const productRouting: ModuleWithProviders = RouterModule.forChild(productRoutes);

