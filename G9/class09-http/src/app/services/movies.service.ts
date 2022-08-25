import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { MoviesRepositoryService } from './movies-repository.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [];

  constructor(
    private router: Router,
    private movieRepositoryService: MoviesRepositoryService
  ) {}

  selectMovieEmitter = new EventEmitter<Movie>();
  moviesEmitter = new EventEmitter<Movie[]>();
  likesEmitter = new EventEmitter<number>();

  moviesSubject = new BehaviorSubject<Movie[]>([]);
  moviesObs$ = this.moviesSubject.asObservable();

  selectedMovieSubject = new BehaviorSubject<Movie>({} as Movie);
  selectedMovie$ = this.selectedMovieSubject.asObservable();

  totalLikes = 0;

  // fetchMovies() {
  //   fetch('https://movies-api-sedc.herokuapp.com/movies')
  //     .then((data) => data.json())
  //     .then((movies) => {
  //       this.movies = movies;
  //       this.moviesEmitter.emit(movies);
  //     });
  // }

  // fetchMovieById(id: number) {
  //   fetch(`https://movies-api-sedc.herokuapp.com/movies/${id}`)
  //     .then((data) => data.json())
  //     .then((movie) => this.selectMovieEmitter.emit(movie))
  //     .catch(() => this.router.navigate(['not-found']));
  // }

  getMovies() {
    this.movieRepositoryService.fetchMovies().subscribe({
      next: (movies: Movie[]) => this.moviesSubject.next(movies),
      error: (err) => console.error(err),
    });
  }

  getMovieById(movieId: number) {
    this.movieRepositoryService.fetchMovieById(movieId).subscribe({
      next: (movie: Movie) => this.selectedMovieSubject.next(movie),
      error: (err) => console.error(err),
    });
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
