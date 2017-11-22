import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { ProductComponent } from './product.component';
import { productRouting } from "./product.routing";
import { SmartadminModule } from "../shared/smartadmin.module";
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component'
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { ShowSelectedPipe } from "../pipes/show-selected.pipe";

@NgModule({
  imports: [
    CommonModule,
    productRouting,
    SmartadminModule,
    FormsModule,
    SmartadminDatatableModule,
    DataTableModule
  ],
  declarations: [ProductComponent, ProductFormComponent, ProductListComponent, ShowSelectedPipe]
})
export class ProductModule { }
