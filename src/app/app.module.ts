import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VideographyComponent } from './videography/videography.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
    VideographyComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    NgbModule.forRoot()
  ],
  providers: [ AppService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
