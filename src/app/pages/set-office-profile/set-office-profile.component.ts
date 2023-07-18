import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-office-profile',
  templateUrl: './set-office-profile.component.html',
  styleUrls: ['./set-office-profile.component.css']
})
export class SetOfficeProfileComponent {

  constructor(private route:Router){}


  onSubmit(form: NgForm) {

    console.log("🚀 ~ file: set-employee-profile.component.ts:17 ~ SetEmployeeProfileComponent ~ onSubmit ~ form.value:", form.value)
  }



  goToDashboard(){
    console.log("navigate")
    // this.route.navigate(["dashboard"])
  }
}
