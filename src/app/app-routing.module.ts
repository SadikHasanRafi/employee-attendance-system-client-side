import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
    {
      path: '', pathMatch: 'full', redirectTo: 'login',
    },{
      path:"login",
      component:LoginComponent
    },{
      path:"signup",
      loadChildren:()=>import("./authentication/signup/signup.module").then(m=>m.SignupModule)
    },{
      path:"approval",
      loadChildren:()=>import("./pages/approval-page/approval-page.module").then(m=>m.ApprovalPageModule)
    },{
      path:"dashboard",
      loadChildren:()=>import("./pages/dashboard/dashboard.module").then(m=>m.DashboardModule)
    },{
      path:"set-employee-profile",
      // component:SetEmployeeProfileComponent,
      loadChildren:()=>import("./pages/set-employee-profile/set-employee-profile.module").then(m=>m.SetEmployeeProfileModule)
    },{
      path:"set-office-profile",
      loadChildren:()=>import("./pages/set-office-profile/set-office-profile.module").then(m=>m.SetOfficeProfileModule)
    },{
      path:"**",
      loadChildren:()=>import("./pages/page-not-found/page-not-found-routing.module").then(m=>m.PageNotFoundRoutingModule)
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
