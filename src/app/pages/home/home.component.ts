import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'fs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly URL_IMAGES: string =
    'https://www.themoviedb.org/t/p/w220_and_h330_face';

  public galleryTemp: MoviesModel[];
  public galleryMostPopular: MoviesModel[];
  public galleryFree: MoviesModel[];
  public galleryTrailers: MoviesModel[];
  public galleryTendencies: MoviesModel[];

  constructor(private apiService: ApiService) {
    this.galleryTemp = [];
    this.galleryMostPopular = [];
    this.galleryFree = [];
    this.galleryTrailers = [];
    this.galleryTendencies = [];
  }

  ngOnInit(): void {
    this.fillGalleryMostPopular();
    this.fillGalleryFree();
    this.fillGalleryTrailers();
    this.fillGalleryTendencies();
  }

  private fillGalleryMostPopular() {
    this.apiService
      .getMostPopular()
      .then((result: any) => {
        this.fillGallery(result.results);
        this.galleryMostPopular = this.galleryTemp;
      })
      .catch((error) =>
        console.log(
          'ERROR: não foi possível retornar os filmes mais assistidos' + error
        )
      );
  }

  private fillGalleryFree() {
    this.apiService
      .getFree()
      .then((result: any) => {
        this.fillGallery(result.results);
        this.galleryFree = this.galleryTemp;
      })
      .catch((error) =>
        console.log('ERROR: não foi possível retornar os filmes grátis' + error)
      );
  }

  private fillGalleryTrailers() {
    this.apiService
      .getTrailers()
      .then((result: any) => {
        this.fillGallery(result.results);
        this.galleryTrailers = this.galleryTemp;
      })
      .catch((error) =>
        console.log('ERROR: não foi possível retornar os trailers' + error)
      );
  }

  private fillGalleryTendencies() {
    this.apiService
      .getTendencies()
      .then((result: any) => {
        this.fillGallery(result.results);
        this.galleryTendencies = this.galleryTemp;
      })
      .catch((error) =>
        console.log(
          'ERROR: não foi possível retornar os filmes tendências' + error
        )
      );
  }

  private fillGallery(content: any): void {
    this.galleryTemp = [];
    content.forEach((item: any) => {
      this.galleryTemp.push({
        id: item.id,
        backdrop_path: this.formatImages(item.backdrop_path),
        poster_path: this.formatImages(item.poster_path),
        release_date: this.formatDate(item.release_date),
        title: item.title,
        vote_average: item.vote_average,
      });
    });
  }

  private formatImages(image: string): string {
    return image ? this.URL_IMAGES + image : '';
  }

  private formatDate(date: string): string {
    if (date) {
      const day = date.substring(8, 10);
      const month = this.getMonth(date.substring(5, 7));
      const year = date.substring(0, 4);
      return day + ' de ' + month + ' de ' + year;
    }
    return '';
  }

  public getMonth(month: string): string {
    if (month === '01') return 'jan';
    if (month === '02') return 'fev';
    if (month === '03') return 'mar';
    if (month === '04') return 'abr';
    if (month === '05') return 'mai';
    if (month === '06') return 'jun';
    if (month === '07') return 'jul';
    if (month === '08') return 'ago';
    if (month === '09') return 'set';
    if (month === '10') return 'out';
    if (month === '11') return 'nov';
    return 'dez';
  }

  public get galleryEnum(): typeof GalleryEnum {
    return GalleryEnum;
  }
}

export class MoviesModel {
  'id': number;
  'title': string;
  'release_date': string;
  'vote_average': number;
  'adult'?: Boolean;
  'backdrop_path'?: string;
  'genre_ids'?: GenreIdsModel[];
  'original_language'?: string;
  'original_title'?: string;
  'overview'?: string;
  'popularity'?: number;
  'poster_path'?: string;
  'video'?: Boolean;
  'vote_count'?: number;
}

export class GenreIdsModel {
  'id': number;
}

export enum GalleryEnum {
  MOST_POPULAR = 'mostPopular',
  FREE = 'free',
  TRAILERS = 'trailers',
  TENDENCIES = 'tendencies',
}
