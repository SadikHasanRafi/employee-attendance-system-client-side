import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-apply-leave',
  templateUrl: './employee-apply-leave.component.html',
  styleUrls: ['./employee-apply-leave.component.css']
})
export class EmployeeApplyLeaveComponent {

  onSubmit(leaveApplication:any){
    console.log("🚀 ~ file: employee-apply-leave.component.ts:11 ~ EmployeeApplyLeaveComponent ~ onSubmit ~ leaveApplication:", leaveApplication.value)
    
  }

  leaveTypes = ['Casual Leave', 'Sickness Leave','Annual Leave'];
  selectedOption: string = '';
  

}
