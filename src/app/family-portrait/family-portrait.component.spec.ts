import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";

import { FamilyPortraitComponent } from "./family-portrait.component";
import { AppService } from "../app.service";

const ROUTES = [
  {
    path: "proserv/family-portrait",
    component: FamilyPortraitComponent
  }
];

describe("FamilyPortraitComponent", () => {
  let component: FamilyPortraitComponent;
  let fixture: ComponentFixture<FamilyPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyPortraitComponent],
      imports: [
        RouterModule.forRoot(ROUTES, { useHash: true }),
        HttpClientTestingModule,
        NgbModule
      ],
      providers: [AppService, HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
