import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie.interface';
import { LoggerService } from 'src/app/services/logger.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss'],
})
export class ReviewDetailsComponent implements OnInit {
  selectedMovie: Movie;
  movieId: number;
  movies: Movie[];

  constructor(
    private movieService: MoviesService,
    private loggerService: LoggerService,
    private route: ActivatedRoute
  ) {
    this.movieId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    // this.movieService.fetchMovieById(this.movieId);
    // this.movieService.selectMovieEmitter.subscribe(
    //   (movie) => (this.selectedMovie = movie)
    // );
    this.movieService.selectedMovie$.subscribe({
      next: (movie) => (this.selectedMovie = movie),
    });
    // Checking to see if a movie exists, and it's not an empty object.
    // const movie = this.movieService.selectedMovieSubject.getValue();
    // if (!movie.title) {
    this.movieService.getMovieById(this.movieId);
    //}
  }

  onMovieEdit() {}

  // onLikeClick() {
  //   console.log('here');
  //   this.loggerService.logTimeFromComponent('Movie Details');
  //   this.movieService.addLike();
  // }
}
