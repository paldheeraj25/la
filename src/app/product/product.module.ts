import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { FileUploadModule } from 'ng2-file-upload';
import { ProductComponent } from './product.component';
import { productRouting } from "./product.routing";
import { SmartadminModule } from "../shared/smartadmin.module";
import { PaginationModule } from 'ngx-bootstrap';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component'
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { ShowSelectedPipe } from "../pipes/show-selected.pipe";
import { JewelComponent } from './jewel/jewel.component';
import { JewelListComponent } from './jewel-list/jewel-list.component';

@NgModule({
  imports: [
    CommonModule,
    productRouting,
    SmartadminModule,
    FormsModule,
    SmartadminDatatableModule,
    DataTableModule,
    FileUploadModule,
    PaginationModule.forRoot()
  ],
  declarations: [ProductComponent, ProductFormComponent, ProductListComponent, ShowSelectedPipe, JewelComponent, JewelListComponent]
})
export class ProductModule { }
