import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAllLeaveRequestComponent } from './company-all-leave-request.component';

const routes: Routes = [
  {
    path:"",
    component:CompanyAllLeaveRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyAllLeaveRequestRoutingModule { }
