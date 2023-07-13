import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent,
    children:[
      //employee section
      {
        path:"employee-application-status",
        loadChildren:()=>import("./employee/employee-application-status/employee-application-status.module").then(m=>m.EmployeeApplicationStatusModule)
      },{
        path:"employee-apply-leave",
        loadChildren:()=>import("./employee/employee-apply-leave/employee-apply-leave.module").then(m=>m.EmployeeApplyLeaveModule)
      },{
        path:"employee-give-attendance",
        loadChildren:()=>import("./employee/employee-give-attendance/employee-give-attendance.module").then(m=>m.EmployeeGiveAttendanceModule)
      },{
        path:"employee-profile",
        loadChildren:()=>import("./employee/employee-profile/employee-profile.module").then(m=>m.EmployeeProfileModule)
      },{
        path:"employee-update-profile",
        loadChildren:()=>import("./employee/employee-update-profile/employee-update-profile.module").then(m=>m.EmployeeUpdateProfileModule)
      },
      

      //office section
      {
        path:"company-all-leave-request",
        loadChildren:()=>import("./company/company-all-leave-request/company-all-leave-request.module").then(m=>m.CompanyAllLeaveRequestModule)
      },{
        path:"company-currently-on-leave",
        loadChildren:()=>import("./company/company-currently-on-leave/company-currently-on-leave.module").then(m=>m.CompanyCurrentlyOnLeaveModule)
      },{
        path:"company-employee-registration-request",
        loadChildren:()=>import("./company/company-employee-registration-request/company-employee-registration-request.module").then(m=>m.CompanyEmployeeRegistrationRequestModule)
      },{
        path:"company-profile",
        loadChildren:()=>import("./company/company-profile/company-profile.module").then(m=>m.CompanyProfileModule)
      },{
        path:"company-show-all-employee",
        loadChildren:()=>import("./company/company-show-all-employees/company-show-all-employees.module").then(m=>m.CompanyShowAllEmployeesModule)
      },{
        path:"company-update-information",
        loadChildren:()=>import("./company/company-update-information/company-update-information.module").then(m=>m.CompanyUpdateInformationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
