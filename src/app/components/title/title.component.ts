import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fs-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() content: any;
  @Input() dark?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
