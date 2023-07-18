import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})




export class SignupComponent {

  constructor(
    private fb: FormBuilder ,
    private auth:AuthenticationService
  ) { }



  signUpForm = this.fb.group({
    email:this.fb.control(""),
    password:this.fb.control("")
  })



  handleSignupFormSubmit():void{
    const email:any = this.signUpForm.value.email
    console.log("🚀 ~ file: signup.component.ts:34 ~ SignupComponent ~ handleSignupFormSubmit ~ email:", email)
    const password:any = this.signUpForm.value.password
    console.log("🚀 ~ file: signup.component.ts:36 ~ SignupComponent ~ handleSignupFormSubmit ~ password:", password)
    // this.auth.signUp(email,password)
  }




  private router = inject(Router)
  goToLogin(){
    this.router.navigate(['/login'])
  }
}
