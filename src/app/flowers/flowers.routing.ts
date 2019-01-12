import { Routes, RouterModule } from '@angular/router';
import { FlowerComponent } from "./flower/flower.component";

export const routes: Routes = [
  {
    path: '', redirectTo: 'create', pathMatch: 'full'
  },
  {
    path: 'create',
    component: FlowerComponent,
  }
];

export const routing = RouterModule.forChild(routes);
