import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [];

  constructor(private router: Router) {}

  selectMovieEmitter = new EventEmitter<Movie>();
  moviesEmitter = new EventEmitter<Movie[]>();
  likesEmitter = new EventEmitter<number>();

  totalLikes = 0;

  fetchMovies() {
    fetch('https://movies-api-sedc.herokuapp.com/movies')
      .then((data) => data.json())
      .then((movies) => {
        this.movies = movies;
        this.moviesEmitter.emit(movies);
      });
  }

  fetchMovieById(id: number) {
    fetch(`https://movies-api-sedc.herokuapp.com/movies/${id}`)
      .then((data) => data.json())
      .then((movie) => this.selectMovieEmitter.emit(movie))
      .catch(() => this.router.navigate(['not-found']));
  }

  loadMovieById(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }

  onMovieSelect(movie: Movie) {
    this.selectMovieEmitter.emit(movie);
  }

  addLike() {
    this.totalLikes++;
    this.likesEmitter.emit(this.totalLikes);
  }
}
