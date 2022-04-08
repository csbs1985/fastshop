import { Component, Input, OnInit } from '@angular/core';

const BASE_PATH = 'assets/images';

@Component({
  selector: 'fs-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() height: number = 24;

  @Input() set icon(value: string) {
    this.iconPath = `${BASE_PATH}/${value}.svg`;
  }

  public iconPath: string = '';

  constructor() {}

  ngOnInit(): void {}
}
