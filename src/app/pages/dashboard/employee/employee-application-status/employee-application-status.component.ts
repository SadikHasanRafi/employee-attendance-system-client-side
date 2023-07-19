import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-application-status',
  templateUrl: './employee-application-status.component.html',
  styleUrls: ['./employee-application-status.component.css']
})
export class EmployeeApplicationStatusComponent {

  leaveApplicationType:string="Annual Leave"
  dateOfLeaveApplicationDate:string="12 June, 2023"

  applicationStatus:string="Approved"



  getClass(status:string){
    let classList='';
    if(this.applicationStatus==="Pending"){
      classList = 'bg-yellow-400'; 
    }else if (this.applicationStatus==="Approved"){
        classList = 'bg-green-400';
    }else if(this.applicationStatus==="Rejected"){
        classList = 'br-red-400';
    }
    return classList;
  }

}
