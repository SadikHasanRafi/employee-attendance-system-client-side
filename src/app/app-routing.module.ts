import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout/main-layout.component';
import { LoginComponent } from './pages/common/login/login.component';
import { SignupComponent } from './pages/common/signup/signup.component';
import { SetEmployeeProfileComponent } from './pages/employee/set-employee-profile/set-employee-profile.component';
import { SetOfficeProfileComponent } from './pages/office/set-office-profile/set-office-profile.component';
import { DashboardComponent } from './pages/common/dashboard/dashboard.component';
import { ApprovalComponent } from './pages/employee/approval/approval.component';
import { EmployeeApplicationStatusComponent } from './pages/employee/employee-application-status/employee-application-status.component';
import { EmployeeApplyLeaveComponent } from './pages/employee/employee-apply-leave/employee-apply-leave.component';
import { EmployeeGiveAttendanceComponent } from './pages/employee/employee-give-attendance/employee-give-attendance.component';
import { EmployeeMyProfileComponent } from './pages/employee/employee-my-profile/employee-my-profile.component';
import { EmployeeUpdateMyProfileComponent } from './pages/employee/employee-update-my-profile/employee-update-my-profile.component';
import { OfficeAllLeaveRequestsComponent } from './pages/office/office-all-leave-requests/office-all-leave-requests.component';
import { OfficeCurrentlyOnLeaveComponent } from './pages/office/office-currently-on-leave/office-currently-on-leave.component';
import { OfficeMyProfileComponent } from './pages/office/office-my-profile/office-my-profile.component';
import { OfficeShowEmployeeDetailsComponent } from './pages/office/office-show-employee-details/office-show-employee-details.component';
import { ShowAllEmployeeComponent } from './pages/office/show-all-employee/show-all-employee.component';
import { UpdateOfficeInformationComponent } from './pages/office/update-office-information/update-office-information.component';

import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path:"",
    component:MainLayoutComponent,
    children:[  
      {
        path:"",
        component:LoginComponent,
      },{
        path:"signup",
        component:SignupComponent
      },{
        path:"setup-employee-profile",
        component:SetEmployeeProfileComponent
      },{
        path:"approval",
        component:ApprovalComponent
      },{
        path:"setup-office-profile",
        component:SetOfficeProfileComponent
      },{
        path:"dashboard",
        component:DashboardComponent,
        children:[
          {
            path:"employee-application-status",
            component:EmployeeApplicationStatusComponent
          },{
            path:"employee-apply-leave",
            component:EmployeeApplyLeaveComponent
          },{
            path:"employee-give-attendance",
            component:EmployeeGiveAttendanceComponent
          },{
            path:"employee-my-profile",
            component:EmployeeMyProfileComponent
          },{
            path:"employee-update-my-profile",
            component:EmployeeUpdateMyProfileComponent
          },
          // now office
          {
            path:"show-all-leave",
            component:OfficeAllLeaveRequestsComponent
          },{
            path:"office-currently-on-leave",
            component:OfficeCurrentlyOnLeaveComponent
          },{
            path:"office-my-profile",
            component:OfficeMyProfileComponent
          },{
            path:"office-registration-requests",
            component:OfficeShowEmployeeDetailsComponent
          },{
            path:"set-office-profile",
            component:SetOfficeProfileComponent
          },{
            path:"show-all-employee",
            component:ShowAllEmployeeComponent
          },{
            path:"update-office-information",
            component:UpdateOfficeInformationComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
