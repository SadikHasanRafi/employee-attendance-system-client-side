import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {

  totalAnnualLeave:number=0
  remainingAnnualLeave:number=0
  totalSicknessLeave:number=0
  remainingSicknessLeave:number=0
  totalCasualLeave:number=0
  remainingCasualLeave:number=0
  employeeName:string="Md. Sadik Hasan Rafi"
  employeeEmail:string="sadikhasan@gmail.com"
  employeePhoneNumber:string="01533632470"
  employeeDesignation:string="intern"

}
