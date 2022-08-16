import { EventEmitter, Injectable } from '@angular/core';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class BasketballService {
  constructor() {}
  teamEmitter: EventEmitter<Team[]> = new EventEmitter<Team[]>();

  fetchAllTeams() {
    fetch('https://www.balldontlie.io/api/v1/teams')
      .then((response) => response.json())
      .then((result) => {
        const teams: Team[] = result.data;
        this.teamEmitter.emit(teams);
      });
  }
}
