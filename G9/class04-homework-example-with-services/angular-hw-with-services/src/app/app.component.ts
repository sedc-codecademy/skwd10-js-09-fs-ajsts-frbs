import { Component, OnInit } from '@angular/core';
import { Team } from './interfaces/team';
import { BasketballService } from './services/basketball.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-hw-with-services';
  teams: Team[];

  constructor(private basketballService: BasketballService) {}

  ngOnInit() {
    this.basketballService.fetchAllTeams();
    this.basketballService.teamEmitter.subscribe((fetchedTeams) => {
      this.teams = fetchedTeams;
    });
  }
}
