import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyUpdateInformationComponent } from './company-update-information.component';

const routes: Routes = [
  {
    path:"",
    component:CompanyUpdateInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyUpdateInformationRoutingModule { }
