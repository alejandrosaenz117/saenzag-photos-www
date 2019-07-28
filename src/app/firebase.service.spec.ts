import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseService } from './firebase.service';
import { environment } from '../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

describe('FirebaseService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, RouterTestingModule]
    })
  );

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
});
