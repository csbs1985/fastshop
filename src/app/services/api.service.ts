import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.url;
  private key = environment.key;

  constructor(private http: HttpClient) {}

  getMostPopular() {
    const url = `${this.baseUrl}?panel=popular_scroller&group=streaming&${this.key}`;
    return this.http.get(url).toPromise();
  }
}
