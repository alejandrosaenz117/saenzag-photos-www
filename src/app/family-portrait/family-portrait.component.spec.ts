import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPortraitComponent } from './family-portrait.component';

describe('FamilyPortraitComponent', () => {
  let component: FamilyPortraitComponent;
  let fixture: ComponentFixture<FamilyPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
