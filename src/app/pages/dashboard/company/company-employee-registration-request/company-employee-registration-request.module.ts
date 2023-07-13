import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyEmployeeRegistrationRequestRoutingModule } from './company-employee-registration-request-routing.module';
import { CompanyEmployeeRegistrationRequestComponent } from './company-employee-registration-request.component';


@NgModule({
  declarations: [
    CompanyEmployeeRegistrationRequestComponent
  ],
  imports: [
    CommonModule,
    CompanyEmployeeRegistrationRequestRoutingModule
  ]
})
export class CompanyEmployeeRegistrationRequestModule { }
