import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginRequestParams } from "../common/model/LoginRequestParams";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  saveLoginData(data: LoginRequestParams): Observable<any> {
    return this.http.post("http://localhost:3000/signup", requestParams(data));
  }
}

function requestParams(data: LoginRequestParams) {
  return data;
}
