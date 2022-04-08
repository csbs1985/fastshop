import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menu: string[];

  constructor() {
    this.menu = ['Filmes', 'Séries', 'Pessoas', 'Mais'];
  }

  ngOnInit(): void {}
}
