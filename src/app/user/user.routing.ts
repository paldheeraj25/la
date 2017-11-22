import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { ModuleWithProviders } from "@angular/core";

export const userRoutes: Routes = [
  {
    path: 'create',
    component: UserComponent,
    data: {
      pageTitle: 'New'
    }
  },
  {
    path: 'list',
    component: UserListComponent,
    data: {
      pageTitle: 'Users List'
    }
  }
];

export const UserRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);