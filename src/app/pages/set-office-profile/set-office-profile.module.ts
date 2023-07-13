import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetOfficeProfileRoutingModule } from './set-office-profile-routing.module';
import { SetOfficeProfileComponent } from './set-office-profile.component';


@NgModule({
  declarations: [
    SetOfficeProfileComponent
  ],
  imports: [
    CommonModule,
    SetOfficeProfileRoutingModule
  ]
})
export class SetOfficeProfileModule { }
