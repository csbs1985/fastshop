import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://www.themoviedb.org/remote/panel';

  constructor(private http: HttpClient) {}

  getMostPopular() {
    const url = `${this.baseUrl}?panel=popular_scroller&group=streaming`;
    return this.http.get(url).toPromise();
  }
}
