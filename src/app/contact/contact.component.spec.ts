import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { AppService } from '../app.service';
import { Contact } from '../contact';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let appServiceStub: Partial<AppService>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {provide: AppService, useValue: appServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('first name field validity', () => {
    let firstName = component.contactForm.controls['firstName']; 
    expect(firstName.valid).toBeFalsy(); 
  });

  it('first name field validity', () => {
    let errors = {};
    let firstName = component.contactForm.controls['firstName'];
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('last name field validity', () => {
    let lastName = component.contactForm.controls['lastName']; 
    expect(lastName.valid).toBeFalsy(); 
  });

  it('last name field validity', () => {
    let errors = {};
    let lastName = component.contactForm.controls['lastName'];
    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('email field validity', () => {
    let email = component.contactForm.controls['email']; 
    expect(email.valid).toBeFalsy(); 
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.contactForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('subject field validity', () => {
    let subject = component.contactForm.controls['subject']; 
    expect(subject.valid).toBeFalsy(); 
  });

  it('subject field validity', () => {
    let errors = {};
    let subject = component.contactForm.controls['subject'];
    errors = subject.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('message field validity', () => {
    let message = component.contactForm.controls['message']; 
    expect(message.valid).toBeFalsy(); 
  });

  it('message field validity', () => {
    let errors = {};
    let message = component.contactForm.controls['message'];
    errors = message.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('submitting a form', () => {
    //Expect the form initially to be invalid
    expect(component.contactForm.valid).toBeFalsy();
    //Fill in form
    component.contactForm.controls['firstName'].setValue("Alejandro");
    component.contactForm.controls['lastName'].setValue("Saenz");
    component.contactForm.controls['email'].setValue("test@gmail.com");
    component.contactForm.controls['subject'].setValue("Photo Shoot Quote");
    component.contactForm.controls['message'].setValue("Hello, I'm reaching out to see if you're available for a quick photoshoot.");
    expect(component.contactForm.valid).toBeTruthy();
  })
});
