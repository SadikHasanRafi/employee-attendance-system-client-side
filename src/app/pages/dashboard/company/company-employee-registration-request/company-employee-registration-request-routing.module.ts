import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyEmployeeRegistrationRequestComponent } from './company-employee-registration-request.component';

const routes: Routes = [
  {
    path:"",
    component:CompanyEmployeeRegistrationRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyEmployeeRegistrationRequestRoutingModule { }
