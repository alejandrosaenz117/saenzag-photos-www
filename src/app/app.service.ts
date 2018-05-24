import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';





@Injectable()
export class AppService {

  constructor(private http:Http) { }

  api = 'http://localhost:3000';

  getAPI() {
    return this.http.get('/api').pipe(
      map(res => res.json()));
  }

  // Get all posts from the API
  getAllPosts() {
    console.log("here3")
    return this.http.get(`${this.api}/api/posts`).pipe(
      map(res => res.json()));
  }

}
