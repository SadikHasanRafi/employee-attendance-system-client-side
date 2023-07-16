import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyCurrentlyOnLeaveComponent } from './company-currently-on-leave.component';

const routes: Routes = [
  {
    path:"",
    component:CompanyCurrentlyOnLeaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyCurrentlyOnLeaveRoutingModule { }
