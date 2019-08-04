import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { FirebaseService } from '../firebase.service';

class Registration {
  constructor(public email: string, public password: string, public confirmPassword: string) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnChanges {
  registerForm: FormGroup;
  registrationModel: Registration;
  submitted = false;
  alertMessage: String;
  alertType: String;
  constructor(private fb: FormBuilder, public appService: AppService, public afAuth: FirebaseService) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    this.registerForm.reset({
      email: this.registrationModel.email,
      password: this.registrationModel.password
    });
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  comparePasswords(group: FormGroup) {
    return group.controls.password.value !== group.controls.confirmPassword.value ? null : { notSame: true };
  }

  onSubmit(registerForm) {
    if (this.comparePasswords(registerForm)) {
      this.registrationModel = registerForm.value;
      this.afAuth
        .createUserWithEmailAndPassword(this.registrationModel.email, this.registrationModel.password)
        .then(res => {
          this.afAuth
            .sendEmailVerification()
            .then(_ => {
              this.alertMessage = `Verification email sent to ${res.user.email}`;
              this.alertType = 'success';
              this.submitted = true;
            })
            .catch(error => {
              this.alertMessage = `Verification email delivery failed for ${res.user.email}`;
              this.alertType = 'danger';
              this.submitted = true;
            });
        })
        .catch(error => {
          this.alertMessage = error.message;
          this.alertType = 'danger';
          this.submitted = true;
        });
    } else {
      this.alertMessage = `Your password and confirmation password do not match`;
      this.alertType = 'danger';
      this.submitted = true;
    }
  }
}