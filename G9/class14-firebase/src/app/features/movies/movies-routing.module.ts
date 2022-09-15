import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

const routes: Routes = [
  { path: '', component: ReviewListComponent },
  { path: 'details/:id', component: ReviewDetailsComponent },
  { path: 'add', component: AddReviewComponent },
  { path: 'edit', component: EditMovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
