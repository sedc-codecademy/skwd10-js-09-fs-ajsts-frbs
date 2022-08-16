import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesEmitter: EventEmitter<Movie[]> = new EventEmitter<Movie[]>();
  selectMovieEmitter: EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor() {}

  fetchMovies() {
    fetch('https://movies-api-sedc.herokuapp.com/movies')
      .then((data) => data.json())
      .then((movies: Movie[]) => this.moviesEmitter.emit(movies));
  }
  onMovieSelect(movie: Movie) {
    this.selectMovieEmitter.emit(movie);
  }
}
