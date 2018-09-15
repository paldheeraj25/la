import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireRoutingModule } from './hire-routing.module';
import { HireComponent } from './hire.component';
import { HireComponentComponent } from './hire-component/hire-component.component';

@NgModule({
  imports: [
    CommonModule,
    HireRoutingModule
  ],
  declarations: [HireComponent, HireComponentComponent]
})
export class HireModule { }
