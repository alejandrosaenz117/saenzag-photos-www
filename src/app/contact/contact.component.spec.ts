import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";

import { ContactComponent } from "./contact.component";
import { AppService } from "../app.service";
import { MockAppService } from "../mock-app.service";

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [
        ReactiveFormsModule,
        NgbModule,
        HttpClientTestingModule,
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule
      ],
      providers: [{ provide: AppService, useClass: MockAppService }, HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty", () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it("first name field validity", () => {
    const firstName = component.contactForm.controls["firstName"];
    expect(firstName.valid).toBeFalsy();
  });

  it("first name field validity", () => {
    let errors = {};
    const firstName = component.contactForm.controls["firstName"];
    errors = firstName.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("last name field validity", () => {
    const lastName = component.contactForm.controls["lastName"];
    expect(lastName.valid).toBeFalsy();
  });

  it("last name field validity", () => {
    let errors = {};
    const lastName = component.contactForm.controls["lastName"];
    errors = lastName.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("email field validity", () => {
    const email = component.contactForm.controls["email"];
    expect(email.valid).toBeFalsy();
  });

  it("email field validity", () => {
    let errors = {};
    const email = component.contactForm.controls["email"];
    errors = email.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("subject field validity", () => {
    const subject = component.contactForm.controls["subject"];
    expect(subject.valid).toBeFalsy();
  });

  it("subject field validity", () => {
    let errors = {};
    const subject = component.contactForm.controls["subject"];
    errors = subject.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("message field validity", () => {
    const message = component.contactForm.controls["message"];
    expect(message.valid).toBeFalsy();
  });

  it("message field validity", () => {
    let errors = {};
    const message = component.contactForm.controls["message"];
    errors = message.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("captcha validity", () => {
    const captcha = component.contactForm.controls["captcha"];
    expect(captcha.valid).toBeFalsy();
  });

  it("captcha validity", () => {
    let errors = {};
    const captcha = component.contactForm.controls["captcha"];
    errors = captcha.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("submitting a form", () => {
    // Expect the form initially to be invalid
    expect(component.contactForm.valid).toBeFalsy();
    // Fill in form
    component.contactForm.controls["firstName"].setValue("Alejandro");
    component.contactForm.controls["lastName"].setValue("Saenz");
    component.contactForm.controls["email"].setValue("test@gmail.com");
    component.contactForm.controls["subject"].setValue("Photo Shoot Quote");
    component.contactForm.controls["message"].setValue(
      "Hello, I'm reaching out to see if you're available for a quick photoshoot."
    );
    component.contactForm.controls["captcha"].setValue("testCaptcha");
    expect(component.contactForm.valid).toBeTruthy();
  });
});
