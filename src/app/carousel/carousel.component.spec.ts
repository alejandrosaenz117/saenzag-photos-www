import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppService } from "../app.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { CarouselComponent } from "./carousel.component";
import { RouterTestingModule } from "@angular/router/testing";

class MockAppService extends AppService {
  /**
   * This method is implemented in the AppService
   * we extend, but we overload it to make sure we
   * return a value we wish to test against
   */
}

describe("CarouselComponent", () => {
  let fixture: ComponentFixture<CarouselComponent>;

  const ROUTES = [
    {
      path: "landscape",
      component: CarouselComponent
    },
    {
      path: "film",
      component: CarouselComponent
    },
    {
      path: "maternity",
      component: CarouselComponent
    },
    {
      path: "night_colors",
      component: CarouselComponent
    },
    {
      path: "family_portraits",
      component: CarouselComponent
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      imports: [
        NgbModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(ROUTES, { useHash: true })
      ],
      providers: [{ provide: AppService, useClass: MockAppService }, HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
