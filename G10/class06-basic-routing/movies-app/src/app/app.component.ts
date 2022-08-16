import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private loggerService: LoggerService,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.loggerService.logTime('App');
    console.log(this.loggerService.getTitle());
  }

  title = 'movies-app';
}
