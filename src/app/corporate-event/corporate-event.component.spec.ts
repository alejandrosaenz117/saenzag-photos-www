import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CorporateEventComponent } from './corporate-event.component';
import { AppService } from '../app.service';



describe('CorporateEventComponent', () => {
  let component: CorporateEventComponent;
  let fixture: ComponentFixture<CorporateEventComponent>;
  let appServiceStub: Partial<AppService>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateEventComponent ],
      providers: [
        {provide: AppService, useValue: appServiceStub }
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.corpEventForm.valid).toBeFalsy();
  });

  it('first name field validity', () => {
    let firstName = component.corpEventForm.controls['firstName']; 
    expect(firstName.valid).toBeFalsy(); 
  });

  it('first name field validity', () => {
    let errors = {};
    let firstName = component.corpEventForm.controls['firstName'];
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('last name field validity', () => {
    let lastName = component.corpEventForm.controls['lastName']; 
    expect(lastName.valid).toBeFalsy(); 
  });

  it('last name field validity', () => {
    let errors = {};
    let lastName = component.corpEventForm.controls['lastName'];
    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('email field validity', () => {
    let email = component.corpEventForm.controls['email']; 
    expect(email.valid).toBeFalsy(); 
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.corpEventForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('startDate field validity', () => {
    let startDate = component.corpEventForm.controls['startDate']; 
    expect(startDate.valid).toBeFalsy(); 
  });

  it('endDate field validity', () => {
    let errors = {};
    let endDate = component.corpEventForm.controls['endDate'];
    errors = endDate.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
/* TODO:  Validate startDate <= End Date
  it('startDate is before endDate', () => {
    let startDate = new Date(2018);
    let endDate = new Date(2019);
    component.corpEventForm.controls['startDate'].setValue(startDate);
    component.corpEventForm.controls['endDate'].setValue(endDate);
    if(component.corpEventForm.controls['startDate'].value <= component.corpEventForm.controls['endDate'].value )
      expect(component.corpEventForm.valid).toBeTruthy();
  });

  it('startDate is after endDate', () => {
    let startDate = new Date(2019);
    let endDate = new Date(2018);
    component.corpEventForm.controls['startDate'].setValue(startDate);
    component.corpEventForm.controls['endDate'].setValue(endDate);
    if(component.corpEventForm.controls['startDate'].value > component.corpEventForm.controls['endDate'].value)
      expect(component.corpEventForm.valid).toBeFalsy();
  });
*/
  it('submitting a form', () => {
    let startDate = new Date(2018);
    let endDate = new Date(2018);
    //Expect the form initially to be invalid
    expect(component.corpEventForm.valid).toBeFalsy();
    //Fill in form
    component.corpEventForm.controls['firstName'].setValue("Alejandro");
    component.corpEventForm.controls['lastName'].setValue("Saenz");
    component.corpEventForm.controls['email'].setValue("test@gmail.com");
    component.corpEventForm.controls['startDate'].setValue(startDate);
    component.corpEventForm.controls['endDate'].setValue(endDate);
    expect(component.corpEventForm.valid).toBeTruthy();
  })
});
