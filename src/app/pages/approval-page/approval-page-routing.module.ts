import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalPageComponent } from './approval-page.component';

const routes: Routes = [
  {
    path:"",
    component:ApprovalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalPageRoutingModule { }
