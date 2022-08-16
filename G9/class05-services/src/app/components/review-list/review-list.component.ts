import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { LoggerService } from 'src/app/services/logger.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent implements OnInit {
  public movies: Movie[];
  constructor(
    private movieService: MoviesService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.loggerService.logTimeFromComponent('Movie List');
    this.movieService.moviesEmitter.subscribe((movies: Movie[]) => this.movies = movies);
    this.movieService.fetchMovies();
  }

  onMovieClick(movie: Movie):void {
    this.movieService.onMovieSelect(movie);
  }
}
