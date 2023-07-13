import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalPageRoutingModule } from './approval-page-routing.module';
import { ApprovalPageComponent } from './approval-page.component';


@NgModule({
  declarations: [
    ApprovalPageComponent
  ],
  imports: [
    CommonModule,
    ApprovalPageRoutingModule
  ]
})
export class ApprovalPageModule { }
