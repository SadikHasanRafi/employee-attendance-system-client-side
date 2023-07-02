import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { ApprovalComponent } from './Pages/approval/approval.component';
import { SetupEmployeeProfileComponent } from './Pages/setup-employee-profile/setup-employee-profile.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeeProfileComponent } from './Pages/employee-profile/employee-profile.component';
import { UpdateEmployeeProfileComponent } from './Pages/update-employee-profile/update-employee-profile.component';
import { ApplyForLeaveComponent } from './Pages/apply-for-leave/apply-for-leave.component';
import { ApplicationStatusComponent } from './Pages/application-status/application-status.component';
import { GiveAttendanceComponent } from './Pages/give-attendance/give-attendance.component';
import { EmployeeRegistrationRequestComponent } from './Pages/employee-registration-request/employee-registration-request.component';
import { EmployeeLeaveRequestComponent } from './Pages/employee-leave-request/employee-leave-request.component';
import { EmployeeOnLeaveListComponent } from './Pages/employee-on-leave-list/employee-on-leave-list.component';
import { AllRegisteredEmployeesComponent } from './Pages/all-registered-employees/all-registered-employees.component';
import { UpdateCompnayInformationComponent } from './Pages/update-compnay-information/update-compnay-information.component';

const routes: Routes = [

  //public route
  { path:"" , component:LayoutComponent , children:[
    { path:"",component:LoginComponent },
    { path:"signup", component:SignupComponent },
    { path:"approval", component:ApprovalComponent},
    { path:"sel-employee-profile", component:SetupEmployeeProfileComponent},
    { path:"dashboard" , component:DashboardComponent , children:[

      // these are employee routes
      { path:"employee-profile" ,component:EmployeeProfileComponent},
      {path:"update-employee-profile" , component:UpdateEmployeeProfileComponent},
      { path:"apply-for-leave" , component:ApplyForLeaveComponent},
      { path:"leave-application-status", component:ApplicationStatusComponent},
      { path:"give-attendance" , component:GiveAttendanceComponent},

      // these all are admin routes
      {path:"employee-registration-requests", component:EmployeeRegistrationRequestComponent},
      { path:"employee-leave-requests" , component:EmployeeLeaveRequestComponent},
      { path:"employee-on-leave-list", component:EmployeeOnLeaveListComponent},
      { path:"show-all-registered-employees", component:AllRegisteredEmployeesComponent},
      { path:"update-admin-information", component:UpdateCompnayInformationComponent}

    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
