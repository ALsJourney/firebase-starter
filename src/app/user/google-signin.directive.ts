import {Directive, HostListener} from '@angular/core';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import {AngularFireAuth} from "@angular/fire/compat/auth";
@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth) { }

  @HostListener('click')
  onClick() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
