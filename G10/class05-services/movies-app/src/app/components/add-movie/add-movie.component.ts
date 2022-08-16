import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  onLikeClick() {
    this.moviesService.onAddLike();
  }
}
