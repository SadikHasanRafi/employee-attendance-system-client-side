import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeApplyLeaveRoutingModule } from './employee-apply-leave-routing.module';
import { EmployeeApplyLeaveComponent } from './employee-apply-leave.component';


@NgModule({
  declarations: [
    EmployeeApplyLeaveComponent
  ],
  imports: [
    CommonModule,
    EmployeeApplyLeaveRoutingModule
  ]
})
export class EmployeeApplyLeaveModule { }
