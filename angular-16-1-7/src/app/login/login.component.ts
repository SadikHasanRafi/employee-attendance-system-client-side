import { Component } from "@angular/core";
import { LoginService } from "./login.service";
import { LoginRequestParams } from "../common/model/LoginRequestParams";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  emailPassword = new LoginRequestParams();
  loading: string;

  constructor(private loginService: LoginService) {}

  submit() {
    this.loading = "loading...";
    this.emailPassword.email = this.email;
    this.emailPassword.password = this.password;
    this.loginService
      .saveLoginData(this.emailPassword)
      .subscribe((result: any) => {
        console.log(
          "🚀 ~ file: login.component.ts:26 ~ LoginComponent ~ .subscribe ~ result:",
          result
        );
        if (result) {
          this.loading = result.hashedPassword;
        }
      });
  }
}
