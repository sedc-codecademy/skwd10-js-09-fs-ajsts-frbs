import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReviewComponent } from 'src/app/features/movies/components/add-review/add-review.component';
import { EditMovieComponent } from 'src/app/features/movies/components/edit-movie/edit-movie.component';
import { MovieFormComponent } from 'src/app/features/movies/components/movie-form/movie-form.component';
import { ReviewDetailsComponent } from 'src/app/features/movies/components/review-details/review-details.component';
import { ReviewListComponent } from 'src/app/features/movies/components/review-list/review-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddReviewComponent,
    EditMovieComponent,
    MovieFormComponent,
    ReviewDetailsComponent,
    ReviewListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
