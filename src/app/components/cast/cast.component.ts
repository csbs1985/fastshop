import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fs-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit {
  @Input() content!: CastModel[];

  readonly URL_IMAGES: string =
    'https://www.themoviedb.org/t/p/w220_and_h330_face';

  constructor() {}

  ngOnInit(): void {
    this.fillCast();
  }

  private fillCast() {}
}

export class CastModel {
  'adult': boolean;
  'gender': number;
  'id': number;
  'known_for_department': string;
  'name': string;
  'original_name': string;
  'popularity': number;
  'profile_path': string;
  'cast_id': number;
  'character': string;
  'credit_id': string;
  'order': number;
}
