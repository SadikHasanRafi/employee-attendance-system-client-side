import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetOfficeProfileRoutingModule } from './set-office-profile-routing.module';
import { SetOfficeProfileComponent } from './set-office-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SetOfficeProfileComponent
  ],
  imports: [
    CommonModule,
    SetOfficeProfileRoutingModule,
    FormsModule
  ]
})
export class SetOfficeProfileModule { }
