import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";

import { CorporateEventComponent } from "./corporate-event.component";
import { AppService } from "../app.service";
import { MockAppService } from "../mock-app.service";

describe("CorporateEventComponent", () => {
  let component: CorporateEventComponent;
  let fixture: ComponentFixture<CorporateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateEventComponent],
      providers: [
        { provide: AppService, useClass: MockAppService },
        HttpClient
      ],
      imports: [
        ReactiveFormsModule,
        NgbModule,
        HttpClientTestingModule,
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty", () => {
    expect(component.corpEventForm.valid).toBeFalsy();
  });

  it("first name field validity", () => {
    const firstName = component.corpEventForm.controls["firstName"];
    expect(firstName.valid).toBeFalsy();
  });

  it("first name field validity", () => {
    let errors = {};
    const firstName = component.corpEventForm.controls["firstName"];
    errors = firstName.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("last name field validity", () => {
    const lastName = component.corpEventForm.controls["lastName"];
    expect(lastName.valid).toBeFalsy();
  });

  it("last name field validity", () => {
    let errors = {};
    const lastName = component.corpEventForm.controls["lastName"];
    errors = lastName.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("email field validity", () => {
    const email = component.corpEventForm.controls["email"];
    expect(email.valid).toBeFalsy();
  });

  it("email field validity", () => {
    let errors = {};
    const email = component.corpEventForm.controls["email"];
    errors = email.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("startDate field validity", () => {
    const startDate = component.corpEventForm.controls["startDate"];
    expect(startDate.valid).toBeFalsy();
  });

  it("endDate field validity", () => {
    let errors = {};
    const endDate = component.corpEventForm.controls["endDate"];
    errors = endDate.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("startDate is before endDate", () => {
    const startDate = new Date(2018);
    const endDate = new Date(2019);
    component.corpEventForm.controls["startDate"].setValue(startDate);
    component.corpEventForm.controls["endDate"].setValue(endDate);
    expect(component.validateDates(component.corpEventForm)).toBeTruthy();
  });

  it("startDate is after endDate", () => {
    const startDate = new Date(2019);
    const endDate = new Date(2018);
    component.corpEventForm.controls["startDate"].setValue(startDate);
    component.corpEventForm.controls["endDate"].setValue(endDate);
    expect(component.validateDates(component.corpEventForm)).toBeFalsy();
  });

  it("submitting a form with all required fields", () => {
    const startDate = new Date(2018);
    const endDate = new Date(2018);
    // Expect the form initially to be invalid
    expect(component.corpEventForm.valid).toBeFalsy();
    // Fill in form with only required fields
    component.corpEventForm.controls["firstName"].setValue("Alejandro");
    component.corpEventForm.controls["lastName"].setValue("Saenz");
    component.corpEventForm.controls["email"].setValue("test@gmail.com");
    component.corpEventForm.controls["startDate"].setValue(startDate);
    component.corpEventForm.controls["endDate"].setValue(endDate);
    component.corpEventForm.controls["captcha"].setValue("testCaptcha");
    expect(component.corpEventForm.valid).toBeTruthy();
    expect(component.validateDates(component.corpEventForm)).toBeTruthy();
  });

  it("submitting a form with a missing required field", () => {
    const startDate = new Date(2018);
    const endDate = new Date(2018);
    // Expect the form initially to be invalid
    expect(component.corpEventForm.valid).toBeFalsy();
    // Fill in form with only required fields
    component.corpEventForm.controls["firstName"].setValue("Alejandro");
    component.corpEventForm.controls["lastName"].setValue("Saenz");
    component.corpEventForm.controls["startDate"].setValue(startDate);
    component.corpEventForm.controls["endDate"].setValue(endDate);
    expect(component.corpEventForm.valid).toBeFalsy();
  });
});
