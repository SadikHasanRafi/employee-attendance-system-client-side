import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetEmployeeProfileRoutingModule } from './set-employee-profile-routing.module';
import { SetEmployeeProfileComponent } from './set-employee-profile.component';


@NgModule({
  declarations: [
    SetEmployeeProfileComponent
  ],
  imports: [
    CommonModule,
    SetEmployeeProfileRoutingModule
  ]
})
export class SetEmployeeProfileModule { }
