import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'fs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public titleMostPopular: any;
  public titleFree: any;
  public titleTendencies: any;

  constructor(private apiService: ApiService) {
    this.titleMostPopular = {
      title: 'Os Mais Populares',
      list: ['Streaming', 'Na TV', 'Para Alugar', 'Nos Cinemas'],
    };
    this.titleFree = {
      title: 'Grátis para Assistir',
      list: ['Filmes', 'TV'],
    };
    this.titleTendencies = {
      title: 'Tendências',
      list: ['Hoje', 'Nesta Semana'],
    };
  }

  ngOnInit(): void {
    this.apiService.getMostPopular();
  }
}
