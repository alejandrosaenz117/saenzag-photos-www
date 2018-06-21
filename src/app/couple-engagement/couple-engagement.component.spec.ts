import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { CoupleEngagementComponent } from './couple-engagement.component';
import { AppService } from '../app.service';

const ROUTES= [
  {
    path: 'proserv/couple-engagement',
    component: CoupleEngagementComponent
  }
]

describe('CoupleEngagementComponent', () => {
  let component: CoupleEngagementComponent;
  let fixture: ComponentFixture<CoupleEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupleEngagementComponent ],
      providers: [
        AppService,
        HttpClient
      ],
      imports: [
        RouterModule.forRoot(ROUTES, {useHash: true}),
        NgbModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupleEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
