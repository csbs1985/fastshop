import { Component, Input, OnInit } from '@angular/core';
import { GalleryEnum, MoviesModel } from 'src/app/pages/home/home.component';

@Component({
  selector: 'fs-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() content?: MoviesModel[];
  @Input() title?: GalleryEnum;
  @Input() dark?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
