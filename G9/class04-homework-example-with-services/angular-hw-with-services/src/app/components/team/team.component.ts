import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  @Input() renderedTeam: Team;
  ngOnInit(): void {
  }

}
