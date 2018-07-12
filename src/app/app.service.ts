import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Contact } from './contact';
import { CorporateEventInquiryForm } from './corporate-event-inquiry-form';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  api = 'http://localhost:8080/api';

  getLandscapeGallery(): Observable<String[]> {
    return this.http.get<String[]>(`${this.api}/gallery_landscape`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFilmGallery(): Observable<String[]> {
    return this.http.get<String[]>(`${this.api}/gallery_film`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getMaternityGallery(): Observable<String[]> {
    return this.http.get<String[]>(`${this.api}/gallery_maternity`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getNightColorsGallery(): Observable<String[]> {
    return this.http.get<String[]>(`${this.api}/gallery_night_colors`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFamilyPortraits(): Observable<String[]> {
    return this.http.get<String[]>(`${this.api}/gallery_family_portraits`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCoupleAndEngagement(): Observable<String[]> {
    return this.http.get<String[]>(`${this.api}/couple_engagement`)
      .pipe(
        catchError(this.handleError)
      );
  }

  submitContactForm(contactForm: Contact) {
    return this.http.post(`${this.api}/contactFormSubmit`, contactForm);
  }

  submitCorporateEventForm(corpEventForm: CorporateEventInquiryForm) {
    return this.http.post(`${this.api}/corpEventFormSubmit`, corpEventForm);
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
    return [];
  }

}
