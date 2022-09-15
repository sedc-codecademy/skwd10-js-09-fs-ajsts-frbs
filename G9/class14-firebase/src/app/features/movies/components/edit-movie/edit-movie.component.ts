import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  movieToEdit: Movie;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movieToEdit = this.moviesService.getMovieToEdit();
  }
}
