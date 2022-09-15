import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionSnapshots,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  query,
  updateDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { MoviesRepositoryService } from './movies-repository.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private router: Router,
    private movieRepositoryService: MoviesRepositoryService,
    private firestore: Firestore
  ) {}

  moviesCollection = collection(this.firestore, 'movies');

  // moviesSubject = new BehaviorSubject<Movie[]>([]);
  // moviesObs$ = this.moviesSubject.asObservable();
  moviesObs$: Observable<Movie[]>;

  selectedMovieSubject = new BehaviorSubject<Movie>({} as Movie);
  selectedMovie$ = this.selectedMovieSubject.asObservable();

  editMovieSubject = new BehaviorSubject<Movie>({} as Movie);
  editMovieObs$ = this.editMovieSubject.asObservable();

  getMovieToEdit() {
    return this.editMovieSubject.getValue();
  }

  getMovies() {
    const moviesQuery = query(this.moviesCollection);
    this.moviesObs$ = collectionSnapshots(moviesQuery).pipe(
      map((documents) =>
        documents.map((doc) => ({ ...doc.data(), id: doc.id } as Movie))
      )
    );
  }

  async getMovieById(movieId: string) {
    try {
      const docReference = doc(this.firestore, 'movies', movieId);
      const movie = await getDoc(docReference);
      this.selectedMovieSubject.next({
        ...movie.data(),
        id: movie.id,
      } as Movie);
    } catch (error) {
      console.log(error);
    }
  }

  async addMovie(movieData: Movie) {
    try {
      const docRef = await addDoc(this.moviesCollection, movieData);
      console.log(docRef);
    } catch (error) {
      console.log(error);
    }
  }

  async updateMovie(movieId: string, movieData: Partial<Movie>) {
    try {
      const docRef = doc(this.firestore, 'movies', movieId);
      await updateDoc(docRef, movieData);
      this.router.navigate(['movies', 'details', docRef.id]);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteMovie(movieId: string) {
    try {
      const docRef = doc(this.firestore, 'movies', movieId);
      await deleteDoc(docRef);
      this.router.navigate(['movies']);
    } catch (error) {
      console.log(error);
    }
  }

  onMovieSelect(movie: Movie) {
    this.selectedMovieSubject.next(movie);
  }
}
