import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';
import { EmployeeProfileComponent } from './employee-profile.component';


@NgModule({
  declarations: [
    EmployeeProfileComponent
  ],
  imports: [
    CommonModule,
    EmployeeProfileRoutingModule
  ]
})
export class EmployeeProfileModule { }
