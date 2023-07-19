import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeUpdateProfileComponent } from './employee-update-profile.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeeUpdateProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeUpdateProfileRoutingModule { }
