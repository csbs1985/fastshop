import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss'],
})
export class LeadersComponent implements OnInit {
  public leaders: any[];

  constructor() {
    this.leaders = [
      { name: 'jinbvcx', abbreviation: 'j', total: 73.524, week: 18.432 },
      { name: 'qualitylover', abbreviation: 'q', total: 83.023, week: 6.771 },
      { name: 'Kuroneko45', abbreviation: 'j', total: 73.524, week: 18.432 },
      { name: 'Fougasse', abbreviation: 'j', total: 73.524, week: 18.432 },
      { name: 'RazieWod', abbreviation: 'j', total: 73.524, week: 18.432 },
      { name: 'wael12345', abbreviation: 'j', total: 73.524, week: 18.432 },
      { name: 'talestalker', abbreviation: 'j', total: 73.524, week: 18.432 },
      { name: 'Adam', abbreviation: 'j', total: 73.524, week: 18.432 },
      { name: 'pingu51', abbreviation: 'j', total: 73.524, week: 18.432 },
      { name: 'BahbugandHum', abbreviation: 'j', total: 73.524, week: 18.432 },
    ];
  }

  ngOnInit(): void {}
}
