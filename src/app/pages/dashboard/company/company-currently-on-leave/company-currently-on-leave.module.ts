import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyCurrentlyOnLeaveRoutingModule } from './company-currently-on-leave-routing.module';
import { CompanyCurrentlyOnLeaveComponent } from './company-currently-on-leave.component';


@NgModule({
  declarations: [
    CompanyCurrentlyOnLeaveComponent
  ],
  imports: [
    CommonModule,
    CompanyCurrentlyOnLeaveRoutingModule
  ]
})
export class CompanyCurrentlyOnLeaveModule { }
