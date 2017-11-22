import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from "./design.component";
import { ModuleWithProviders } from "@angular/core";

export const designRoutes: Routes = [
  {
    path: '',
    component: DesignComponent,
    data: {
      pageTitle: 'Design'
    }
  },
  {
    path: ':id',
    component: DesignComponent,
    data: {
      pageTitle: 'Edit'
    }
  }
];

export const designRouting: ModuleWithProviders = RouterModule.forChild(designRoutes);

