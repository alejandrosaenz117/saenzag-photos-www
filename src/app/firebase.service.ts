import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject, interval, of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private user: Observable<firebase.User>;
  public userDetails;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = this.afAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {
        this.userDetails = null;
        console.log('no details from user');
      }
    });
  }

  signInWithEmailAndPassword(email, pass) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error' + error);
    });
    if (this.userDetails) {
      email = this.userDetails.email;
      console.log('hello im user' + ' ' + email);
    } else {
      console.log('not working');
    }
  }

  logout() {
    this.afAuth.auth.signOut().then(_ => {
      location.reload();
    });
  }
}
