import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetEmployeeProfileComponent } from './set-employee-profile.component';

const routes: Routes = [
  {
    path:"",
    component:SetEmployeeProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetEmployeeProfileRoutingModule { }
