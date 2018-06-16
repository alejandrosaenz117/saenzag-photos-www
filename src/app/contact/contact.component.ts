import { Component, OnInit, OnChanges } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnChanges {
  public contactModel: Contact = new Contact("", "", "", "", "")
  submitted = false
  contactForm: FormGroup;

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
      message: ['', [Validators.required, Validators.maxLength(250)]]
    })
  }

  onSubmit(contact: FormGroup) {
    this.contactModel = contact.value;
    this.appService.submitContactForm(this.contactModel)
      //TODO:  Create success message!
      .subscribe((res) => console.log(''))
    this.contactForm.reset();
  }

  rebuildForm() {
    this.contactForm.reset({
      firstName: this.contactModel.firstName,
      lastName: this.contactModel.lastName,
      email: this.contactModel.email,
      subject: this.contactModel.subject,
      message: this.contactModel.message,
    });
  }

}
