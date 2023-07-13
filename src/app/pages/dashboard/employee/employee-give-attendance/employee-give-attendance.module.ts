import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeGiveAttendanceRoutingModule } from './employee-give-attendance-routing.module';
import { EmployeeGiveAttendanceComponent } from './employee-give-attendance.component';


@NgModule({
  declarations: [
    EmployeeGiveAttendanceComponent
  ],
  imports: [
    CommonModule,
    EmployeeGiveAttendanceRoutingModule
  ]
})
export class EmployeeGiveAttendanceModule { }
