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
import { PostsComponent } from './posts/posts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';


const ROUTES = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'gallery',
    component: CarouselComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
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
