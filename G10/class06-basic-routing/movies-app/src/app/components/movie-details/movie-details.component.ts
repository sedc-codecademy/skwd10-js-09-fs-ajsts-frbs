import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { LoggerService } from 'src/app/services/logger.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: Movie;
  movieId: number;

  constructor(
    private loggerService: LoggerService,
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {
    this.movieId = this.route.snapshot.params['id'];
    console.log(this.movieId);
  }

  ngOnInit(): void {
    this.loggerService.logTime('Movie Details');

    this.moviesService.fetchMovieById(this.movieId);

    this.moviesService.selectedMovieEmitter.subscribe((value) => {
      this.selectedMovie = value;
    });
  }

  onLikeClick() {
    this.moviesService.onAddLike();
  }
}
