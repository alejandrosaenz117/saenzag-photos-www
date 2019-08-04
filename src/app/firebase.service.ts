import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
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
      } else {
        this.userDetails = null;
      }
    });
  }

  signInWithEmailAndPassword(email, pass) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  createUserWithEmailAndPassword(email, pass) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
  }

  sendEmailVerification() {
    const user = firebase.auth().currentUser;
    return user.sendEmailVerification();
  }

  sendPasswordResetEmail(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logout() {
    this.afAuth.auth.signOut().then(_ => {
      this.router.navigate(['login']);
    });
  }
}
