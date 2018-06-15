import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, scan, catchError } from 'rxjs/operators';
import { Contact } from './contact';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse} from '@angular/common/http';


@Injectable()
export class AppService {

  constructor(private http:HttpClient) { }

  api = 'http://localhost:3000/api';

  /*
  getAPI() {
    return this.http.get(`${this.api}`).pipe(
      map(res => res.json()));
  }

  getAllPosts() {
    return this.http.get(`${this.api}/posts`)
    .pipe(map(res => res.json()));
  }
*/
  getLandscapeGallery() {
    return this.http.get<String[]>(`${this.api}/gallery_landscape`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFilmGallery() {
    return this.http.get<String[]>(`${this.api}/gallery_film`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getMaternityGallery() {
    return this.http.get<String[]>(`${this.api}/gallery_maternity`)
  }

  getNightColorsGallery() {
    return this.http.get<String[]>(`${this.api}/gallery_night_colors`)
  }

  getFamilyPortraits() {
    return this.http.get<String[]>(`${this.api}/gallery_family_portraits`)
  }

  submitContactForm(contactForm: Contact) {
    return this.http.post(`${this.api}/contactFormSubmit`, contactForm)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
     return []
  };

}
