import { Routes, RouterModule } from '@angular/router';
import { FlowerComponent } from "./flower/flower.component";
import { FlowersListComponent } from './flowers-list/flowers-list.component';
import { FlowersOrdersComponent } from './flower-orders/flowers-orders.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'create', pathMatch: 'full'
  },
  {
    path: 'create',
    component: FlowerComponent,
  },
  {
    path: 'list',
    component: FlowersListComponent,
  },
  {
    path: 'orders',
    component: FlowersOrdersComponent
  }
];

export const routing = RouterModule.forChild(routes);
