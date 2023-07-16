import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeApplicationStatusComponent } from '../employee-application-status/employee-application-status.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeeApplicationStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeUpdateProfileRoutingModule { }
