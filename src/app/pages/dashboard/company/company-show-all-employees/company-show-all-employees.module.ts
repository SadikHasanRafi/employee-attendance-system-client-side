import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyShowAllEmployeesRoutingModule } from './company-show-all-employees-routing.module';
import { CompanyShowAllEmployeesComponent } from './company-show-all-employees.component';


@NgModule({
  declarations: [
    CompanyShowAllEmployeesComponent
  ],
  imports: [
    CommonModule,
    CompanyShowAllEmployeesRoutingModule
  ]
})
export class CompanyShowAllEmployeesModule { }
