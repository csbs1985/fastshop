import { Component, Input, OnInit } from '@angular/core';
import { GalleryEnum } from 'src/app/pages/home/home.component';

@Component({
  selector: 'fs-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() title?: GalleryEnum;

  public titleContent: TitleModel;

  constructor() {
    this.titleContent = { title: '', list: [] };
  }

  ngOnInit(): void {
    this.fillTitle();
  }

  private fillTitle(): void {
    if (this.title === GalleryEnum.MOST_POPULAR) {
      this.titleContent.title = 'Os Mais Populares';
      this.titleContent.list = [
        'Streaming',
        'Na TV',
        'Para Alugar',
        'Nos Cinemas',
      ];
    }
    if (this.title === GalleryEnum.FREE) {
      this.titleContent.title = 'Grátis para Assistir';
      this.titleContent.list = ['Filmes', 'TV'];
    }
    if (this.title === GalleryEnum.TRAILERS) {
      this.titleContent.title = 'Últimos Trailers';
      this.titleContent.list = [
        'Streaming',
        'Na TV',
        'Para Alugar',
        'Nos Cinemas',
      ];
    }
    if (this.title === GalleryEnum.TENDENCIES) {
      this.titleContent.title = 'Tendências';
      this.titleContent.list = ['Hoje', 'Nesta Semana'];
    }
  }
}

export class TitleModel {
  'title': string;
  'list': string[];
}
