import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../app.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from './carousel.component';
import { RouterModule } from '@angular/router';


describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let activatedRoute: ActivatedRoute
  let appServiceStub: Partial<AppService>;

  const ROUTES = [
    {
      path: 'landscape',
      component: CarouselComponent
    },
    {
      path: 'film',
      component: CarouselComponent
    },
    {
      path: 'maternity',
      component: CarouselComponent
    },
    {
      path: 'night_colors',
      component: CarouselComponent
    },
    {
      path: 'family_portraits',
      component: CarouselComponent
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      imports: [
        NgbModule,
        HttpClientTestingModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
      ],
      providers: [
        {provide: AppService, useValue: appServiceStub },
        HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
