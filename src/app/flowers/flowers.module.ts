import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';

import { SmartadminModule } from '../shared/smartadmin.module'
import { FormsModule } from "@angular/forms";

import { routing } from './flowers.routing';
import { FlowerComponent } from './flower/flower.component';



@NgModule({
  imports: [
    SmartadminModule,
    FormsModule,
    routing
  ],
  declarations: [FlowerComponent]
})
export class FlowersModule { }
