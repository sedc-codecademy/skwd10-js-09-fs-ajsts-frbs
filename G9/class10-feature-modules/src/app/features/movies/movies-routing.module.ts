import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewListComponent } from 'src/app/features/movies/components/review-list/review-list.component';
import { ReviewDetailsComponent } from 'src/app/features/movies/components/review-details/review-details.component';
import { AddReviewComponent } from 'src/app/features/movies/components/add-review/add-review.component';
import { EditMovieComponent } from 'src/app/features/movies/components/edit-movie/edit-movie.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewListComponent,
    title: 'Review List',
  },
  {
    path: 'details/:id',
    component: ReviewDetailsComponent,
    title: 'Review Details',
  },
  { path: 'add-movie', component: AddReviewComponent, title: 'Add Review' },
  { path: 'edit-movie', component: EditMovieComponent, title: 'Edit Review' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
