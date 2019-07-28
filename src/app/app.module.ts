import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VideographyComponent } from './videography/videography.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProservComponent } from './proserv/proserv.component';
import { CorporateEventComponent } from './corporate-event/corporate-event.component';
import { CoupleEngagementComponent } from './couple-engagement/couple-engagement.component';
import { FamilyPortraitComponent } from './family-portrait/family-portrait.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { environment } from '../environments/environment';

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
  },
  {
    path: 'proserv',
    component: ProservComponent
  },
  {
    path: 'proserv/corp-event-inquiry',
    component: CorporateEventComponent
  },
  {
    path: 'proserv/family-portrait',
    component: FamilyPortraitComponent
  },
  {
    path: 'proserv/couple-engagement',
    component: CoupleEngagementComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
    VideographyComponent,
    AboutComponent,
    ContactComponent,
    ProservComponent,
    CorporateEventComponent,
    CoupleEngagementComponent,
    FamilyPortraitComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    NgbModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AppService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
