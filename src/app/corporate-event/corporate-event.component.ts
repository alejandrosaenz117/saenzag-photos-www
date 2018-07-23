import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../app.service';
import { CorporateEventInquiryForm } from '../corporate-event-inquiry-form';


@Component({
  selector: 'app-corporate-event',
  templateUrl: './corporate-event.component.html',
  styleUrls: ['./corporate-event.component.css']
})
export class CorporateEventComponent implements OnChanges {
  corpEventFormModel: CorporateEventInquiryForm;
  corpEventForm: FormGroup;
  submitted = false;
  alertType: String;
  alertMessage: String;

  resolved(captchaResponse: string) {
     // console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  constructor(private appService: AppService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  createForm() {
    this.corpEventForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [ Validators.email, Validators.required ]],
      phone: [''],
      eventTitle: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      website: [''],
      additionalInfo: [''],
      captcha: [null, Validators.required]
    });
  }


  rebuildForm() {
    this.corpEventForm.reset({
      firstName: this.corpEventFormModel.firstName,
      lastName: this.corpEventFormModel.lastName,
      email: this.corpEventFormModel.email,
      phone: this.corpEventFormModel.phone,
      eventTitle: this.corpEventFormModel.eventTitle,
      startDate: this.corpEventFormModel.startDate,
      endDate: this.corpEventFormModel.endDate,
      website: this.corpEventFormModel.website,
      additionalInfo: this.corpEventFormModel.additionalInfo,
      captcha: this.corpEventFormModel.captcha
    });
  }

  onSubmit(form: FormGroup) {
    this.corpEventFormModel = form.value;
    this.appService.submitCorporateEventForm(this.corpEventFormModel)
      // TODO:  Create success message!
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
    this.corpEventForm.reset();
  }

  validateDates(form: FormGroup) {
    if (form.controls['endDate'] && form.controls['startDate']) {
      if (form.controls['startDate'].value <= form.controls['endDate'].value) {
          return true;
      } else {
          return false;
      }
    }
  }

}
