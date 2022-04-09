import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'fs-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss'],
})
export class LeadersComponent implements OnInit {
  public leaders: LeadersModel[];

  constructor() {
    this.leaders = [
      { name: 'jinbvcx', abbreviation: 'j', total: 73.524, week: 18.432 },
      { name: 'qualitylover', abbreviation: 'q', total: 83.023, week: 6.771 },
      { name: 'Kuroneko45', abbreviation: 'j', total: 13.786, week: 4.973 },
      { name: 'Fougasse', abbreviation: 'j', total: 9.289, week: 4.973 },
      { name: 'RazieWod', abbreviation: 'j', total: 9.289, week: 4.187 },
      { name: 'wael12345', abbreviation: 'j', total: 112.623, week: 4.04 },
      { name: 'talestalker', abbreviation: 'j', total: 22.067, week: 7.729 },
      { name: 'Adam', abbreviation: 'j', total: 703.325, week: 5.341 },
      { name: 'pingu51', abbreviation: 'j', total: 45.255, week: 4.713 },
      { name: 'BahbugandHum', abbreviation: 'j', total: 266.801, week: 3.531 },
    ];
  }

  ngOnInit(): void {}

  public fillWidth(item: number, index: number): string {
    let element = document.getElementById(`graphic-${index}`)!.offsetWidth;
    let width = (element / 100) * parseInt(item.toString().slice(0, 2));
    return width.toString() + 'px';
  }
}

export class LeadersModel {
  'abbreviation': string;
  'name': string;
  'total': number;
  'week': number;
}
