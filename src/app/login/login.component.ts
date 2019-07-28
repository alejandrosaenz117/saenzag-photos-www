import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    public router: Router,
    public firebaseService: FirebaseService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(creds) {
    this.firebaseService.signInWithEmailAndPassword(
      creds.value.email,
      creds.value.password
    );
  }

  logout() {
    this.afAuth.auth.signOut().then(_ => {
      this.router.navigate(['/landscape']);
    });
  }
}
