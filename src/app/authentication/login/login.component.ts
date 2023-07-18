import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
        // private auth:AuthenticationService,
        private fb: FormBuilder ,
    ){}

    
  logInForm = this.fb.group({
    email:this.fb.control(""),
    password:this.fb.control("")
  })

  handleLoginFormSubmit():void{
    const email:any = this.logInForm.value.email
    console.log("🚀 ~ file: login.component.ts:26 ~ LoginComponent ~ handleLoginFormSubmit ~ email:", email)
    const password:any = this.logInForm.value.password
    console.log("🚀 ~ file: login.component.ts:28 ~ LoginComponent ~ handleLoginFormSubmit ~ password:", password)
    // this.auth.logIn(email,password)
  }

}
