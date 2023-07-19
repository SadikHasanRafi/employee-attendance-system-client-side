import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';
import { EmployeeProfileComponent } from './employee-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeProfileComponent
  ],
  imports: [
    CommonModule,
    EmployeeProfileRoutingModule,
    FormsModule
  ]
})
export class EmployeeProfileModule { }
