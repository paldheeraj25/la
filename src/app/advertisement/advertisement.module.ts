import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { AdvertisementComponent } from "./advertisement/advertisement.component";
import { SmartadminModule } from "../shared/smartadmin.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SmartadminModule,
    AdvertisementRoutingModule
  ],
  declarations: [AdvertisementComponent]
})
export class AdvertisementModule { }
