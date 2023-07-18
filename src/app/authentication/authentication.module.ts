import { AngularFireModule } from "@angular/fire/compat";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { environment } from './environments/environment';
import { AuthenticationService } from './service/authentication.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth())
  ],
  providers:[AuthenticationService]
})
export class AuthenticationModule { }
