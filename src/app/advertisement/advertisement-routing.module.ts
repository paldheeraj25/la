import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementComponent } from "./advertisement/advertisement.component";

const routes: Routes = [{
  path: '',
  component: AdvertisementComponent,
  data: {
    pageTitle: 'Advertisement'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementRoutingModule { }
