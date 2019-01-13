import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';

import { SmartadminModule } from '../shared/smartadmin.module'
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";

import { routing } from './flowers.routing';
import { FlowerComponent } from './flower/flower.component';
import { FlowersListComponent } from './flowers-list/flowers-list.component';



@NgModule({
  imports: [
    SmartadminModule,
    FormsModule,
    routing,
    DataTableModule
  ],
  declarations: [FlowerComponent, FlowersListComponent]
})
export class FlowersModule { }
