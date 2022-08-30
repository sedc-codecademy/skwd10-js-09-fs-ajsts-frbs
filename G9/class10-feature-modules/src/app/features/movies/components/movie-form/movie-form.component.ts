import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { User } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  @Input() isEdit: boolean = false;
  movieForm: FormGroup;
  editMovieData: Movie;
  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    if (this.isEdit) {
      this.editMovieData = this.moviesService.getMovieToEdit();
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
        director: new FormControl('', Validators.required),
        genres: new FormControl('', Validators.required),
        text: new FormControl('', Validators.required),
        rating: new FormControl(null, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        author: new FormControl('', Validators.required),
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
        director: new FormControl(director, Validators.required),
        genres: new FormControl(genres, Validators.required),
        text: new FormControl(text, Validators.required),
        rating: new FormControl(rating, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        author: new FormControl(author, Validators.required),
      });
    }
  }

  onFormSubmit() {
    const { title, year, director, genres, text, rating, author } =
      this.movieForm.value;
    const movieData: Movie = {
      title,
      year: parseInt(year),
      director,
      genres,
      text,
      rating: parseInt(rating),
      author,
      likeCount: 0,
    };

    if (this.isEdit) {
      this.moviesService.updateMovie(this.editMovieData.id, movieData);
      this.router.navigate(['movies/details', this.editMovieData.id]);
    } else {
      this.moviesService.addMovie(movieData);
    }
  }
}
