import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeUpdateProfileRoutingModule } from './employee-update-profile-routing.module';
import { EmployeeUpdateProfileComponent } from './employee-update-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeUpdateProfileComponent
  ],
  imports: [
    CommonModule,
    EmployeeUpdateProfileRoutingModule,
    FormsModule
  ]
})
export class EmployeeUpdateProfileModule { }
