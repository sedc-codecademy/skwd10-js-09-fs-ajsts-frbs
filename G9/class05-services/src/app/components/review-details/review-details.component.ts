import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { LoggerService } from 'src/app/services/logger.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss'],
})
export class ReviewDetailsComponent implements OnInit {
  selectedMovie: Movie;
  constructor(
    private movieService: MoviesService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.loggerService.logTimeFromComponent('Movie Details');
    this.movieService.selectMovieEmitter.subscribe(
      (movie) => (this.selectedMovie = movie)
    );
  }

  onLikeClick() {
    this.movieService.addLike(this.selectedMovie);
  }
}
