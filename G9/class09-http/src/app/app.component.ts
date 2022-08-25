import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'services-v2';
  totalLikes: number = 0;

  constructor(
    private movieService: MoviesService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.loggerService.logTimeFromComponent('App Component');

    this.movieService.likesEmitter.subscribe(
      (likes) => (this.totalLikes = likes)
    );

    this.movieService.fetchMovies();
  }
}
