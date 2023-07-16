import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetOfficeProfileComponent } from './set-office-profile.component';

const routes: Routes = [
  {
    path:"",
    component:SetOfficeProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetOfficeProfileRoutingModule { }
