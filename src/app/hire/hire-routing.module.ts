import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HireComponentComponent } from './hire-component/hire-component.component';
import { HireComponent } from './hire.component';

const routes: Routes = [
  {
    path: '',
    component: HireComponent
  },
  {
    path: 'resources',
    component: HireComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireRoutingModule { }
