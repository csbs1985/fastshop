import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.url;
  private key = environment.key;

  // fonte: https://developers.themoviedb.org/3/movies/get-movie-credits

  constructor(private http: HttpClient) {}

  getFree() {
    const url = `${this.baseUrl}/discover/movie?sort_by=free_scroller.desc&${this.key}&language=pt-BR`;
    return this.http.get(url).toPromise();
  }

  getMostPopular() {
    const url = `${this.baseUrl}/discover/movie?sort_by=popularity.desc&${this.key}&language=pt-BR`;
    return this.http.get(url).toPromise();
  }

  getMovies(movieId: string) {
    const url = `${this.baseUrl}/movie/${movieId}?${this.key}&language=pt-BR&append_to_response=credits`;
    return this.http.get(url).toPromise();
  }

  getPerson(personId: string) {
    const url = `${this.baseUrl}/person/${personId}?${this.key}&language=pt-BR&append_to_response=movies`;
    return this.http.get(url).toPromise();
  }

  getAllMoviesPerPerson(personId: string) {
    const url = `${this.baseUrl}/discover/movie?${this.key}&language=pt-BR&with_people=${personId}&append_to_response=credits`;
    return this.http.get(url).toPromise();
  }

  getTrailers() {
    const url = `${this.baseUrl}/discover/movie?sort_by=trailer_scroller.desc&${this.key}&language=pt-BR`;
    return this.http.get(url).toPromise();
  }

  getTendencies() {
    const url = `${this.baseUrl}/discover/movie?sort_by=trending_scroller.desc&${this.key}&language=pt-BR`;
    return this.http.get(url).toPromise();
  }
}
