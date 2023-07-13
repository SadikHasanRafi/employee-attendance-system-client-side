import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeUpdateProfileRoutingModule } from './employee-update-profile-routing.module';
import { EmployeeUpdateProfileComponent } from './employee-update-profile.component';


@NgModule({
  declarations: [
    EmployeeUpdateProfileComponent
  ],
  imports: [
    CommonModule,
    EmployeeUpdateProfileRoutingModule
  ]
})
export class EmployeeUpdateProfileModule { }
