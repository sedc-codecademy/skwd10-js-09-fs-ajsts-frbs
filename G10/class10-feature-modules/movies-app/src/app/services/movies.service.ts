import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { MoviesRepositoryService } from './movies-repository.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private router: Router,
    private movieRepoService: MoviesRepositoryService
  ) {}

  //Subjects
  moviesSubject = new BehaviorSubject<Movie[]>([]);
  moviesObs$ = this.moviesSubject as Observable<Movie[]>;

  selectedMovieSubject = new BehaviorSubject<Movie | null>(null);
  selectedMovieObs$ = this.selectedMovieSubject as Observable<Movie | null>;

  editMovieSubject = new BehaviorSubject<Movie>({} as Movie);

  getMovieToEdit() {
    return this.editMovieSubject.getValue();
  }

  getMovies() {
    this.movieRepoService.fetchMovies().subscribe({
      next: (value) => {
        this.moviesSubject.next(value);
      },
      error: (err) => console.error(err),
    });
  }

  getMovieById(movieId: number) {
    this.movieRepoService.fetchMovieById(movieId).subscribe({
      next: (value) => this.selectedMovieSubject.next(value),
      error: (err) => console.error(err),
    });
  }

  addNewMovie(movieData: Movie) {
    this.movieRepoService.postNewMovie(movieData).subscribe({
      next: (movie) => {
        this.selectedMovieSubject.next(movie);
        this.router.navigate(['movies', 'details', movie.id]);
      },
      error: (err) => console.error(err),
    });
  }

  updateMovie(movieId: number, updateMovieData: Partial<Movie>) {
    this.movieRepoService.patchMovie(movieId, updateMovieData).subscribe({
      next: (movie) => {
        this.selectedMovieSubject.next(movie);
        this.router.navigate(['movies', 'details', movie.id]);
      },
      error: (err) => console.error(err),
    });
  }

  onMovieSelect(movie: Movie) {
    this.selectedMovieSubject.next(movie);
  }
}
