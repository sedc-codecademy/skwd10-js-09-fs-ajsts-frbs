import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddReviewComponent,
    EditMovieComponent,
    MovieFormComponent,
    ReviewDetailsComponent,
    ReviewListComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, ReactiveFormsModule],
})
export class MoviesModule {}
