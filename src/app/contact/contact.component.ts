import { Component, OnInit, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnChanges {
  public contactModel: Contact;
  submitted = false;
  alertMessage: String;
  alertType: String;
  contactForm: FormGroup;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  constructor(private appService: AppService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(250)]],
      captcha: [null, Validators.required]
    });
  }

  onSubmit(contact: FormGroup) {
    this.contactModel = contact.value;
    console.log(this.contactModel);
    this.appService.submitContactForm(this.contactModel)
      .subscribe(
        success => {
          this.alertMessage = 'Thank you for your submission!  We will get back to you ASAP!';
          this.alertType = 'success';
          this.submitted = true;
        },
        error => {
          this.alertMessage = 'Something went wrong!  Please try again later.';
          this.alertType = 'danger';
          this.submitted = true;
        }
      );
    this.contactForm.reset();
  }

  rebuildForm() {
    this.contactForm.reset({
      firstName: this.contactModel.firstName,
      lastName: this.contactModel.lastName,
      email: this.contactModel.email,
      subject: this.contactModel.subject,
      message: this.contactModel.message,
      captcha: this.contactModel.captcha
    });
  }

}
