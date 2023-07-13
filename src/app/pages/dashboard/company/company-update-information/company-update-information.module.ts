import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyUpdateInformationRoutingModule } from './company-update-information-routing.module';
import { CompanyUpdateInformationComponent } from './company-update-information.component';


@NgModule({
  declarations: [
    CompanyUpdateInformationComponent
  ],
  imports: [
    CommonModule,
    CompanyUpdateInformationRoutingModule
  ]
})
export class CompanyUpdateInformationModule { }
