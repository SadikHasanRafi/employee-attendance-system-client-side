import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ApprovalComponent } from './Pages/approval/approval.component';
import { SetupEmployeeProfileComponent } from './Pages/setup-employee-profile/setup-employee-profile.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { EmployeeProfileComponent } from './Pages/employee-profile/employee-profile.component';
import { UpdateEmployeeProfileComponent } from './Pages/update-employee-profile/update-employee-profile.component';
import { GiveAttendanceComponent } from './Pages/give-attendance/give-attendance.component';
import { ApplicationStatusComponent } from './Pages/application-status/application-status.component';
import { ApplyForLeaveComponent } from './Pages/apply-for-leave/apply-for-leave.component';
import { AdminProfileComponent } from './Pages/admin-profile/admin-profile.component';
import { EmployeeRegistrationRequestComponent } from './Pages/employee-registration-request/employee-registration-request.component';
import { EmployeeLeaveRequestComponent } from './Pages/employee-leave-request/employee-leave-request.component';
import { EmployeeOnLeaveListComponent } from './Pages/employee-on-leave-list/employee-on-leave-list.component';
import { AllRegisteredEmployeesComponent } from './Pages/all-registered-employees/all-registered-employees.component';
import { UpdateCompnayInformationComponent } from './Pages/update-compnay-information/update-compnay-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ApprovalComponent,
    SetupEmployeeProfileComponent,
    DashboardComponent,
    LayoutComponent,
    EmployeeProfileComponent,
    UpdateEmployeeProfileComponent,
    GiveAttendanceComponent,
    ApplicationStatusComponent,
    ApplyForLeaveComponent,
    AdminProfileComponent,
    EmployeeRegistrationRequestComponent,
    EmployeeLeaveRequestComponent,
    EmployeeOnLeaveListComponent,
    AllRegisteredEmployeesComponent,
    UpdateCompnayInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
