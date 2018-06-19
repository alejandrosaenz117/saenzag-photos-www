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
});
