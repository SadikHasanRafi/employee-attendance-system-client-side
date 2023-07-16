import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeGiveAttendanceComponent } from './employee-give-attendance.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeeGiveAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeGiveAttendanceRoutingModule { }
