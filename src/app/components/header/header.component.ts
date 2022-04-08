import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menu: string[];
  public submenu: string[];

  constructor() {
    this.menu = ['Filmes', 'Séries', 'Pessoas', 'Mais'];
    this.submenu = ['Entrar', 'Junte-se ao TMDB'];
  }

  ngOnInit(): void {}
}
