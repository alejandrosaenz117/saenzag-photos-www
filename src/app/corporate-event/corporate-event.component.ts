import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../app.service';
import { CorporateEventInquiryForm } from '../corporate-event-inquiry-form';
//import { validateDates } from '../validators/date.validator';


@Component({
  selector: 'app-corporate-event',
  templateUrl: './corporate-event.component.html',
  styleUrls: ['./corporate-event.component.css']
})
export class CorporateEventComponent implements OnChanges {
  corpEventFormModel: CorporateEventInquiryForm;
  corpEventForm: FormGroup;
  emailRegex: string = '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$';

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
      additionalInfo: ['']
    })
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
    })
  }

  onSubmit(form: FormGroup) {
    this.corpEventFormModel = form.value;
    this.appService.submitCorporateEventForm(this.corpEventFormModel)
      //TODO:  Create success message!
      .subscribe(
        success => {
          alert("Thank you!  We will review your submission and get back to you ASAP!")
        },
        error => {
          alert("There was an error processing your request! Please try again");
        }
      )
    this.corpEventForm.reset();
  }

}
