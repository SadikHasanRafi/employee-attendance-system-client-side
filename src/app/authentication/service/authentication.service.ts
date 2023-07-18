import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,signInWithEmailAndPassword} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor(
    private firebase: AngularFireAuth
  ) { }


  async signUp(email: string, password: string) {
    console.log("🚀 ~ file: authentication.service.ts:20 ~ AuthenticationService ~ signUp ~ password:", password)
    console.log("🚀 ~ file: authentication.service.ts:20 ~ AuthenticationService ~ signUp ~ email:", email)
    // const auth = getAuth();
    
    // await createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log("🚀 ~ file: auth.service.ts:26 ~ AuthService signup ~ .then ~ user:", user)
    //     // ...
        
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  }

  async logIn(email:string,password:string){
    console.log("🚀 ~ file: authentication.service.ts:40 ~ AuthenticationService ~ logIn ~ password:", password)
    console.log("🚀 ~ file: authentication.service.ts:40 ~ AuthenticationService ~ logIn ~ email:", email)
    // const auth = getAuth()
    // this.firebase.signInWithEmailAndPassword(email,password).then(()=>{
    //   localStorage.setItem("token","true")
    // },(err:string) => {
    //   alert("sore wa daijovu janai des")
    //   console.log(err)
    // }) 
    // await signInWithEmailAndPassword(auth,email,password).then(userCredidential=>{
    //   console.log("🚀 ~ file: authentication.service.ts:43 ~ AuthenticationService ~ awaitsignInWithEmailAndPassword ~ userCredidential:", userCredidential)
    // })
  }



  // getCurrentUser():User{

  //   currentUser:User = {};
  //   const auth = getAuth();

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       currentUser.uid = user.uid;
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });

  //   return currentUser
  // }


}
