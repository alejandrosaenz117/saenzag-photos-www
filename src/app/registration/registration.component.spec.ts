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
import { FirebaseService } from '../firebase.service';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let firebaseThrowPasswordShortService: Partial<FirebaseService>;

  firebaseThrowPasswordShortService = {
    createUserWithEmailAndPassword(email, password) {
      return new Promise((resolve, reject) => {
        reject({ message: 'test error', code: '' });
      });
    }
  };

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
      providers: [
        { provide: AppService, useClass: MockAppService },
        { provide: FirebaseService, useValue: firebaseThrowPasswordShortService }
      ]
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
    component.registerForm.controls['confirmPassword'].setValue('testpassword123');
    expect(component.registerForm.valid).toBeTruthy();
  });

  it('registration form should not be valid with bad email', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['email'].setValue('test@');
    component.registerForm.controls['password'].setValue('11111111');
    component.registerForm.controls['confirmPassword'].setValue('11111111');
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('registration form should not submit if password and confirmation password do not match', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['email'].setValue('test@');
    component.registerForm.controls['password'].setValue('11111111');
    component.registerForm.controls['confirmPassword'].setValue('11111112');
    expect(component.comparePasswords(component.registerForm)).toBeFalsy();
  });

  it('registration form should submit if password and confirmation password do not match', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['email'].setValue('test@');
    component.registerForm.controls['password'].setValue('11111111');
    component.registerForm.controls['confirmPassword'].setValue('11111111');
    expect(component.comparePasswords(component.registerForm)).toBeTruthy();
  });
});
