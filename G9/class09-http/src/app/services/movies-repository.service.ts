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
    return this.http.get(MOVIES_URL).pipe(map((data) => data as Movie[]));
  }

  fetchMovieById(movieId: number): Observable<Movie> {
    return this.http
      .get(`${MOVIES_URL}/${movieId}`)
      .pipe(map((data) => data as Movie));
  }
}
