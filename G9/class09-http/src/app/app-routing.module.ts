import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: ReviewListComponent },
  { path: 'movie-details/:id', component: ReviewDetailsComponent },
  { path: 'add-movie', component: AddReviewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
