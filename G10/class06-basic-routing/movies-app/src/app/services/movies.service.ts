import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private router: Router) {
    console.log(router);
  }

  totalLikes: number = 0;

  moviesEmitter = new EventEmitter<Movie[]>();
  selectedMovieEmitter = new EventEmitter<Movie>();
  likesEmitter = new EventEmitter<number>();

  getInitialLikes() {
    return this.totalLikes;
  }

  onMovieSelect(movie: Movie) {
    this.selectedMovieEmitter.emit(movie);
  }

  onAddLike() {
    this.totalLikes++;
    this.likesEmitter.emit(this.totalLikes);
  }

  fetchMovies() {
    fetch('https://movies-api-sedc.herokuapp.com/movies')
      .then((res) => res.json())
      .then((data) => this.moviesEmitter.emit(data));
  }

  fetchMovieById(id: number) {
    fetch(`https://movies-api-sedc.herokuapp.com/movies/${id}`)
      .then((res) => res.json())
      .then((data) => this.selectedMovieEmitter.emit(data))
      .catch((err) => this.router.navigate(['not-found']));
  }
}
