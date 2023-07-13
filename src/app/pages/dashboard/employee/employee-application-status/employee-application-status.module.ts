import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeApplicationStatusRoutingModule } from './employee-application-status-routing.module';
import { EmployeeApplicationStatusComponent } from './employee-application-status.component';


@NgModule({
  declarations: [
    EmployeeApplicationStatusComponent
  ],
  imports: [
    CommonModule,
    EmployeeApplicationStatusRoutingModule
  ]
})
export class EmployeeApplicationStatusModule { }
