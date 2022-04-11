import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public listMenu: string[];

  constructor() {
    this.listMenu = ['Visão Geral', 'Mídia', 'Fã-Clube', 'Compartilhar'];
  }

  ngOnInit(): void {}
}
