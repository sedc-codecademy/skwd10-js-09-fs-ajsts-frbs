import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import {
  Firestore,
  collection,
  query,
  collectionData,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private router: Router, private firestore: Firestore) {}

  moviesCollection = collection(this.firestore, 'movies');

  moviesObs$: Observable<Movie[]>;

  selectedMovieSubject = new BehaviorSubject<Movie | null>(null);
  selectedMovieObs$ = this.selectedMovieSubject as Observable<Movie | null>;

  editMovieSubject = new BehaviorSubject<Movie>({} as Movie);

  getMovieToEdit() {
    return this.editMovieSubject.getValue();
  }

  getMovies() {
    // const moviesQuery = query(this.moviesCollection);

    this.moviesObs$ = collectionData(this.moviesCollection, {
      idField: 'id',
    }).pipe(map((value) => value as Movie[]));
  }

  async getMovieById(movieId: string) {
    try {
      const docReference = doc(this.firestore, 'movies', movieId);

      const movieSnapshot = await getDoc(docReference);

      const movie: Movie = {
        ...movieSnapshot.data(),
        id: movieSnapshot.id,
      } as Movie;

      this.selectedMovieSubject.next(movie);
    } catch (error) {
      console.log(error);
    }
  }

  async addNewMovie(movieData: Movie) {
    try {
      const docRef = await addDoc(this.moviesCollection, movieData);

      await this.getMovieById(docRef.id);

      this.router.navigate(['movies', 'details', docRef.id]);
    } catch (error) {
      console.log(error);
    }
  }

  async updateMovie(movieId: string, updateMovieData: Partial<Movie>) {
    try {
      const docRef = doc(this.firestore, 'movies', movieId);

      await updateDoc(docRef, updateMovieData);

      await this.getMovieById(docRef.id);

      this.router.navigate(['movies', 'details', docRef.id]);
    } catch (error) {
      console.log(error);
    }
  }

  async removeMovie(movieId: string) {
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
