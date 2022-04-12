import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'fs-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss'],
})
export class MovieHeaderComponent implements OnInit {
  @Input() content!: any;

  readonly URL_BANNER: string =
    'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces';

  readonly URL_POSTER: string =
    'https://www.themoviedb.org/t/p/w220_and_h330_face';

  public movie: any;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.fillMovieHeader();
  }

  private fillMovieHeader() {
    this.movie = {
      backdrop_path: this.URL_BANNER + this.content.backdrop_path,
      genres: this.content.genres,
      overview: this.content.overview,
      poster_path: this.URL_POSTER + this.content.poster_path,
      release_date: this.datePipe.transform(
        this.content.release_date,
        'dd/MM/yyyy'
      ),
      runtime: this.content.runtime,
      tagline: this.content.tagline,
      title: this.content.title,
      vote_average: this.content.vote_average * 10,
      year: this.datePipe.transform(this.content.release_date, 'yyyy'),
    };
  }
}
