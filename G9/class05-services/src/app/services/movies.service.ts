import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  totalLikes: number = 0;
  moviesEmitter: EventEmitter<Movie[]> = new EventEmitter<Movie[]>();
  selectMovieEmitter: EventEmitter<Movie> = new EventEmitter<Movie>();
  likesEmitter: EventEmitter<number> = new EventEmitter<number>();
  likedMovieEmitter: EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor() {}

  fetchMovies() {
    fetch('https://movies-api-sedc.herokuapp.com/movies')
      .then((data) => data.json())
      .then((movies: Movie[]) => this.moviesEmitter.emit(movies));
  }
  onMovieSelect(movie: Movie) {
    // fetch(`https://movies-api-sedc.herokuapp.com/movies/${movie.id}`)
    //   .then((data) => data.json())
    //   .then((movie: Movie) => this.selectMovieEmitter.emit(movie));
    this.selectMovieEmitter.emit(movie);
  }

  addLike(selectedMovie: Movie) {
    this.totalLikes++;
    this.likesEmitter.emit(this.totalLikes);
    this.likedMovieEmitter.emit(selectedMovie);
  }
}
