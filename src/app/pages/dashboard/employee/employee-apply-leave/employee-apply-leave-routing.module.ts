import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeApplyLeaveComponent } from './employee-apply-leave.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeeApplyLeaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeApplyLeaveRoutingModule { }
