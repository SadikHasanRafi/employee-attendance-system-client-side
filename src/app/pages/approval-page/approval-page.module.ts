import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalPageRoutingModule } from './approval-page-routing.module';
import { ApprovalPageComponent } from './approval-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApprovalPageComponent
  ],
  imports: [
    CommonModule,
    ApprovalPageRoutingModule,
    FormsModule
  ]
})
export class ApprovalPageModule { }
