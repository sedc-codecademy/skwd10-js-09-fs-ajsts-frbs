import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

const MOVIES_URL = 'https://movies-api-sedc.herokuapp.com/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesRepositoryService {
  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<Movie[]> {
    return this.http.get(MOVIES_URL).pipe(map((value) => value as Movie[]));
  }

  fetchMovieById(movieId: number): Observable<Movie> {
    return this.http
      .get(`${MOVIES_URL}/${movieId}`)
      .pipe(map((value) => value as Movie));
  }

  postNewMovie(newMovieData: Movie) {
    return this.http
      .post(MOVIES_URL, newMovieData)
      .pipe(map((value) => value as Movie));
  }

  patchMovie(movieId: number, updateMovieData: Partial<Movie>) {
    return this.http
      .patch(`${MOVIES_URL}/${movieId}`, updateMovieData)
      .pipe(map((value) => value as Movie));
  }
}
