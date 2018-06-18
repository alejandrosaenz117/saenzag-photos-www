import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProservComponent } from './proserv.component';

describe('ProservComponent', () => {
  let component: ProservComponent;
  let fixture: ComponentFixture<ProservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
