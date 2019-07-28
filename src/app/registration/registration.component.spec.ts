import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from './registration.component';
import { AppService } from '../app.service';
import { MockAppService } from '../mock-app.service';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        NgbModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        RouterTestingModule
      ],
      providers: [{ provide: AppService, useClass: MockAppService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should be invalid if email is empty', () => {
    const email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('should be invalid if email is not correctly formatted', () => {
    component.registerForm.controls['email'].setValue('test@test..');
    expect(component.registerForm.controls['email'].valid).toBeFalsy();
    component.registerForm.controls['email'].setValue('test');
    expect(component.registerForm.controls['email'].valid).toBeFalsy();
  });

  it('password field validity', () => {
    const password = component.registerForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });

  it('registration form should be valid', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['email'].setValue('test@gmail.com');
    component.registerForm.controls['password'].setValue('testpassword123');
    expect(component.registerForm.valid).toBeTruthy();
  });
});
