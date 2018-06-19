import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleEngagementComponent } from './couple-engagement.component';

describe('CoupleEngagementComponent', () => {
  let component: CoupleEngagementComponent;
  let fixture: ComponentFixture<CoupleEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupleEngagementComponent ]
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
