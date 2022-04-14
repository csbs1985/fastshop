import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public image =
    'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';

  public menu: string[];
  public submenu: string[];

  constructor() {
    this.menu = ['Filmes', 'Séries', 'Pessoas', 'Mais'];
    this.submenu = ['Entrar', 'Junte-se ao TMDB'];
  }

  ngOnInit(): void {}

  public toggleMenu(): void {}
}
