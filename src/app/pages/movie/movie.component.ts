import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'flix-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  private movieId?: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id')?.toString() || '';

    this.apiService
      .getMovies(this.movieId)
      .then((result: any) => {
        console.log(result);
      })
      .catch((error) =>
        console.log('ERROR: não foi possível retornar o filme' + error)
      );
  }
}
