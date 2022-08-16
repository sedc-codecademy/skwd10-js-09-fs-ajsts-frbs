import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-services';
  public totalLikes: number = 0;

  constructor(
    private loggerService: LoggerService,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.loggerService.logTimeFromComponent('App Component');
    this.moviesService.likesEmitter.subscribe(
      (likes) => (this.totalLikes = likes)
    );
  }
}
