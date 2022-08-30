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

  moviesSubject = new BehaviorSubject<Movie[]>([]);
  moviesObs$ = this.moviesSubject.asObservable();

  selectedMovieSubject = new BehaviorSubject<Movie>({} as Movie);
  selectedMovie$ = this.selectedMovieSubject.asObservable();

  editMovieSubject = new BehaviorSubject<Movie>({} as Movie);
  editMovieObs$ = this.editMovieSubject.asObservable();

  totalLikes = 0;

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

  addMovie(movie: Movie) {
    this.movieRepositoryService.postNewMovie(movie).subscribe({
      next: (createdMovie) => {
      },
      error: (err) => console.error(err),
    });
  }

  getMovieToEdit() {
    return this.editMovieSubject.getValue();
  }

  updateMovie(movieId: number | undefined, movieData: Partial<Movie>) {
    this.movieRepositoryService.updateMovie(movieId, movieData).subscribe({
      next: (movie) => {
        this.selectedMovieSubject.next(movie);
      },
    });
  }

  loadMovieById(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }

  onMovieSelect(movie: Movie) {
    this.selectedMovieSubject.next(movie);
  }
}
