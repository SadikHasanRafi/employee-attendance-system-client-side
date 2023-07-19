import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-update-profile',
  templateUrl: './employee-update-profile.component.html',
  styleUrls: ['./employee-update-profile.component.css']
})
export class EmployeeUpdateProfileComponent {

  constructor(private route:Router){}
  

  onSubmit(form: NgForm) {
  console.log("🚀 ~ file: employee-update-profile.component.ts:16 ~ EmployeeUpdateProfileComponent ~ onSubmit ~ form:", form.value)

  }


  goToDashboard(){
    console.log("navigate")
    this.route.navigate(["dashboard/employee-profile"])
  }

}
