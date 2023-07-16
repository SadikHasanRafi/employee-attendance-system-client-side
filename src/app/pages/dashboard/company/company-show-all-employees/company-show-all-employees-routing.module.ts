import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyShowAllEmployeesComponent } from './company-show-all-employees.component';

const routes: Routes = [
  {
    path:"",
    component:CompanyShowAllEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyShowAllEmployeesRoutingModule { }
