import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from "@angular/forms";
import { SmartadminModule } from "../shared/smartadmin.module";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { DataTableModule } from "angular2-datatable";
import {UserRouting} from './user.routing';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
    UserRouting,
    FormsModule,
    DataTableModule
  ],
  declarations: [UserComponent, UserListComponent, UserFormComponent]
})
export class UserModule { }
