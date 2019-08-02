import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  passwordResetForm: FormGroup;
  alertMessage: String;
  alertType: String;
  submitted = false;
  constructor(private fb: FormBuilder, public firebaseService: FirebaseService) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.passwordResetForm = this.fb.group({
      email: ['', Validators.email]
    });
  }

  onSubmit(passwordResetForm) {
    this.firebaseService
      .sendPasswordResetEmail(passwordResetForm.value.email)
      .then(() => {
        this.alertMessage = `Reset email delivery sent to ${passwordResetForm.value.email}`;
        this.alertType = 'success';
        this.submitted = true;
      })
      .catch(error => {
        this.alertMessage = `Reset email delivery failed for ${passwordResetForm.value.email}`;
        this.alertType = 'danger';
        this.submitted = true;
      });
  }
}
