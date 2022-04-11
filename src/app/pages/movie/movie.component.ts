import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flix-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('funciona');
  }
}
