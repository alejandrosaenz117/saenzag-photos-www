import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateEventComponent } from './corporate-event.component';

describe('CorporateEventComponent', () => {
  let component: CorporateEventComponent;
  let fixture: ComponentFixture<CorporateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateEventComponent ]
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
});
