import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { LoggerService } from 'src/app/services/logger.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MoviesService,
    private loggerService: LoggerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieService.getMovies();
    this.loggerService.logTimeFromComponent('Movie List');

    this.movieService.moviesObs$.subscribe({
      next: (movies) => (this.movies = movies),
    });
  }

  onMovieClick(movie: Movie) {
    this.movieService.onMovieSelect(movie);
    this.router.navigate(['movies', 'details', movie.id]);
  }
}
