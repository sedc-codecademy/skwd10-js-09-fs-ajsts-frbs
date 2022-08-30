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
  constructor(private moviesService: MoviesService) {}

  get moviesObs$() {
    return this.moviesService.moviesObs$;
  }

  ngOnInit(): void {
    this.moviesService.getMovies();
  }

  onMovieClick(movie: Movie) {
    this.moviesService.onMovieSelect(movie);
  }
}
