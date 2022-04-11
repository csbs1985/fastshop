import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.url;
  private key = environment.key;

  // fonte: https://www.themoviedb.org/documentation/api/discover

  constructor(private http: HttpClient) {}

  getMostPopular() {
    const url = `${this.baseUrl}/discover/movie?sort_by=popularity.desc&${this.key}`;
    return this.http.get(url).toPromise();
  }

  getFree() {
    const url = `${this.baseUrl}/discover/movie?sort_by=free_scroller.desc&${this.key}`;
    return this.http.get(url).toPromise();
  }

  getTrailers() {
    const url = `${this.baseUrl}/discover/movie?sort_by=trailer_scroller.desc&${this.key}`;
    return this.http.get(url).toPromise();
  }

  getTendencies() {
    const url = `${this.baseUrl}/discover/movie?sort_by=trending_scroller.desc&${this.key}`;
    return this.http.get(url).toPromise();
  }
}
