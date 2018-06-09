import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, scan, catchError } from 'rxjs/operators';
import { Contact } from './contact';
import { NgForm } from '@angular/forms';

@Injectable()
export class AppService {

  constructor(private http:Http) { }

  api = 'http://localhost:3000/api';

  getAPI() {
    return this.http.get(`${this.api}`).pipe(
      map(res => res.json()));
  }

  getAllPosts() {
    return this.http.get(`${this.api}/posts`)
    .pipe(map(res => res.json()));
  }

  getLandscapeGallery() {
    return this.http.get(`${this.api}/gallery_landscape`)
  }

  getFilmGallery() {
    return this.http.get(`${this.api}/gallery_film`)
  }

  getMaternityGallery() {
    return this.http.get(`${this.api}/gallery_maternity`)
  }

  getNightColorsGallery() {
    return this.http.get(`${this.api}/gallery_night_colors`)
  }

  submitContactForm(contactForm: Contact) {
    return this.http.post(`${this.api}/contactFormSubmit`, contactForm)
  }

}
