import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieListComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieFormComponent,
    MovieDetailsComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, ReactiveFormsModule],
})
export class MoviesModule {}
