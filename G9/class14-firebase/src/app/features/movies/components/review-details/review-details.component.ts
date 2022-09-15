import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  movieId: string;
  movies: Movie[];

  constructor(
    private movieService: MoviesService,
    private loggerService: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.movieId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.movieId);

    this.movieService.selectedMovie$.subscribe(
      (movie) => (this.selectedMovie = movie)
    );
  }

  onLikeClick() {
    console.log('here');
    this.loggerService.logTimeFromComponent('Movie Details');
  }

  onMovieEdit() {
    this.movieService.editMovieSubject.next(this.selectedMovie);
    this.router.navigate(['movies', 'edit']);
  }

  onMovieDelete() {
    if (this.selectedMovie) {
      this.movieService.deleteMovie(this.selectedMovie.id);
    }
  }
}
