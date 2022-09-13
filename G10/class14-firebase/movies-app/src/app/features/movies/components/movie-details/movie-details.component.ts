import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { LoggerService } from 'src/app/services/logger.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: Movie | null;
  movieId: string;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.movieId = this.route.snapshot.params['id'];
    console.log(this.movieId);
  }

  ngOnInit(): void {
    const isMovieSelected =
      !!this.moviesService.selectedMovieSubject.getValue();

    if (!isMovieSelected) {
      this.moviesService.getMovieById(this.movieId);
    }

    this.moviesService.selectedMovieObs$.subscribe(
      (movie) => (this.selectedMovie = movie)
    );
  }

  onMovieEdit() {
    this.moviesService.editMovieSubject.next(this.selectedMovie as Movie);
    this.router.navigate(['movies', 'edit']);
  }

  onMovieDelete() {
    if (this.selectedMovie) {
      this.moviesService.removeMovie(this.selectedMovie.id);
    }
  }
}
