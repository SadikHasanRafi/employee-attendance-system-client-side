import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprovalComponent } from './pages/employee/approval/approval.component';
import { SetEmployeeProfileComponent } from './pages/employee/set-employee-profile/set-employee-profile.component';
import { EmployeeMyProfileComponent } from './pages/employee/employee-my-profile/employee-my-profile.component';
import { EmployeeUpdateMyProfileComponent } from './pages/employee/employee-update-my-profile/employee-update-my-profile.component';
import { EmployeeApplyLeaveComponent } from './pages/employee/employee-apply-leave/employee-apply-leave.component';
import { EmployeeApplicationStatusComponent } from './pages/employee/employee-application-status/employee-application-status.component';
import { EmployeeGiveAttendanceComponent } from './pages/employee/employee-give-attendance/employee-give-attendance.component';
import { LoginComponent } from './pages/common/login/login.component';
import { SignupComponent } from './pages/common/signup/signup.component';
import { SetOfficeProfileComponent } from './pages/office/set-office-profile/set-office-profile.component';
import { OfficeMyProfileComponent } from './pages/office/office-my-profile/office-my-profile.component';
import { UpdateOfficeInformationComponent } from './pages/office/update-office-information/update-office-information.component';
import { ShowAllEmployeeComponent } from './pages/office/show-all-employee/show-all-employee.component';
import { OfficeRegistrationRequestsComponent } from './pages/office/office-registration-requests/office-registration-requests.component';
import { OfficeAllLeaveRequestsComponent } from './pages/office/office-all-leave-requests/office-all-leave-requests.component';
import { OfficeShowEmployeeDetailsComponent } from './pages/office/office-show-employee-details/office-show-employee-details.component';
import { OfficeCurrentlyOnLeaveComponent } from './pages/office/office-currently-on-leave/office-currently-on-leave.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/common/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ApprovalComponent,
    SetEmployeeProfileComponent,
    EmployeeMyProfileComponent,
    EmployeeUpdateMyProfileComponent,
    EmployeeApplyLeaveComponent,
    EmployeeApplicationStatusComponent,
    EmployeeGiveAttendanceComponent,
    SetOfficeProfileComponent,
    OfficeMyProfileComponent,
    UpdateOfficeInformationComponent,
    ShowAllEmployeeComponent,
    OfficeRegistrationRequestsComponent,
    OfficeAllLeaveRequestsComponent,
    OfficeShowEmployeeDetailsComponent,
    OfficeCurrentlyOnLeaveComponent,
    MainLayoutComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
