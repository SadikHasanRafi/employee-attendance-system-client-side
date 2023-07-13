import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyAllLeaveRequestRoutingModule } from './company-all-leave-request-routing.module';
import { CompanyAllLeaveRequestComponent } from './company-all-leave-request.component';


@NgModule({
  declarations: [
    CompanyAllLeaveRequestComponent
  ],
  imports: [
    CommonModule,
    CompanyAllLeaveRequestRoutingModule
  ]
})
export class CompanyAllLeaveRequestModule { }
