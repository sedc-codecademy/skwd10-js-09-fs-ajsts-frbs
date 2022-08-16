import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { LoggerService } from 'src/app/services/logger.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(
    private loggerService: LoggerService,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.loggerService.logTime('Movie List');
    this.moviesService.fetchMovies();

    this.moviesService.moviesEmitter.subscribe((value: Movie[]) => {
      console.log('This is from the list subscription');
      console.log(value);
      this.movies = value;
    });
  }

  onItemClick(movie: Movie) {
    this.moviesService.onMovieSelect(movie);
  }
}
