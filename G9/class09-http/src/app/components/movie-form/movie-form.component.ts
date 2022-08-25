import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  @Input() isEdit: boolean = false;
  movieForm: FormGroup;
  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {}

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
    }
  }

  onFormSubmit() {
    console.log(this.movieForm.value);    
  }
}
