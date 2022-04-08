import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public navigation: any[];
  public image =
    'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';

  constructor() {
    this.navigation = [
      {
        category: 'O BÁSICO',
        value: [
          'Sobre o TMDB',
          'Contate-nos',
          'Suporte',
          'API',
          'Status do Sistema',
        ],
      },
      {
        category: 'ENVOLVA-SE',
        value: [
          'Bíblia do Colaborador',
          'Adicionar um novo Filme',
          'Adicionar uma nova Série',
        ],
      },
      {
        category: 'COMUNIDADE',
        value: [
          'Diretrizes',
          'Discussões',
          'Placar de colaboradores',
          'Twitter',
        ],
      },
      {
        category: 'LEGALIDADE',
        value: [
          'Termos de uso',
          'Termos de Uso da API',
          'Política de privacidade',
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
