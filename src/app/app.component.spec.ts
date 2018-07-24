import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VideographyComponent } from './videography/videography.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { MockAppService } from './mock-app.service';


const ROUTES = [
  {
    path: '',
    redirectTo: 'landscape',
    pathMatch: 'full'
  },
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
  },
  {
    path: 'videography',
    component: VideographyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        CarouselComponent,
        VideographyComponent,
        AboutComponent,
        ContactComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(ROUTES, { useHash: true }),
        NgbModule,
        ReactiveFormsModule,
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule
      ],
      providers: [
        { provide: AppService, useClass: MockAppService }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
