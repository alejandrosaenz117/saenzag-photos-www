import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseService } from '../firebase.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

import { PasswordResetComponent } from './password-reset.component';

describe('PasswordResetComponent', () => {
  let component: PasswordResetComponent;
  let fixture: ComponentFixture<PasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordResetComponent],
      imports: [
        NgbModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [FirebaseService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.passwordResetForm.valid).toBeFalsy();
  });

  it('should be invalid if email is empty', () => {
    const email = component.passwordResetForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('should be invalid if email is not correctly formatted', () => {
    component.passwordResetForm.controls['email'].setValue('test@test..');
    expect(component.passwordResetForm.controls['email'].valid).toBeFalsy();
    component.passwordResetForm.controls['email'].setValue('test');
    expect(component.passwordResetForm.controls['email'].valid).toBeFalsy();
  });

  it('password reset form form should be valid', () => {
    expect(component.passwordResetForm.valid).toBeFalsy();
    component.passwordResetForm.controls['email'].setValue('test@gmail.com');
    expect(component.passwordResetForm.valid).toBeTruthy();
  });

  it('password reset form form should not be valid with bad email', () => {
    expect(component.passwordResetForm.valid).toBeFalsy();
    component.passwordResetForm.controls['email'].setValue('test@');
    expect(component.passwordResetForm.valid).toBeFalsy();
  });
});
