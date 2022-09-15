import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  @Input() isEdit: boolean = false;
  editMovieData: Movie;

  movieForm: FormGroup;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    if (this.isEdit) {
      this.editMovieData = this.moviesService.getMovieToEdit();
      console.log(this.editMovieData);
    }
    this.initForm();
  }

  initForm() {
    if (!this.isEdit) {
      this.movieForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        year: new FormControl(null, [
          Validators.required,
          Validators.min(1900),
        ]),
        director: new FormControl('', [Validators.required]),
        genres: new FormControl('', [Validators.required]),
        text: new FormControl('', [Validators.required]),
        rating: new FormControl(null, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        author: new FormControl('', [Validators.required]),
      });
    } else {
      const { title, year, director, genres, text, rating, author } =
        this.editMovieData;

      this.movieForm = new FormGroup({
        title: new FormControl(title, [Validators.required]),
        year: new FormControl(year, [
          Validators.required,
          Validators.min(1900),
        ]),
        director: new FormControl(director, [Validators.required]),
        genres: new FormControl(genres, [Validators.required]),
        text: new FormControl(text, [Validators.required]),
        rating: new FormControl(rating, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        author: new FormControl(author, [Validators.required]),
      });
    }
  }

  onFormSubmit() {
    const movieData: Movie = {...this.movieForm.value, likeCount: 0};

    if (this.isEdit) {
      this.moviesService.updateMovie(this.editMovieData.id, movieData);
    } else {
      this.moviesService.addMovie(movieData);
    }

    console.log(movieData);
  }

  onFormReset() {
    this.movieForm.reset();
  }
}
