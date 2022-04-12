import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'fs-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  readonly URL_POSTER = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';
  readonly URL_IMAGES: string =
    'https://www.themoviedb.org/t/p/w150_and_h225_bestv2';

  private personId!: string;

  public person: any;
  public movies: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    public datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get('id') || '';
    this.getPerson();
  }

  private getPerson(): void {
    this.apiService
      .getPerson(this.personId)
      .then((result: any) => {
        this.person = result;
        this.getAllMoviesPerPerson();
      })
      .catch((error) =>
        console.log('ERROR: não foi possível retornar a pessoa' + error)
      );
  }

  private getAllMoviesPerPerson(): void {
    this.apiService
      .getAllMoviesPerPerson(this.personId)
      .then((result: any) => {
        this.movies = result.results;
      })
      .catch((error) =>
        console.log(
          'ERROR: não foi possível retornar a lista de filmes' + error
        )
      );
  }

  public getGenrer(genrer: number): string {
    return genrer === 1 ? 'Feminino' : 'Masculino';
  }
}
