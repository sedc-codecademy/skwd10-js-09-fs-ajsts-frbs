import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: "Home" },
  { path: 'movies', component: ReviewListComponent, title: "Movies" },
  { path: 'movie-details/:id', component: ReviewDetailsComponent, title: "Movie Details" },
  { path: 'add-movie', component: AddReviewComponent, title: "Add Review" },
  {path: 'edit-movie', component: EditMovieComponent, title: "Edit Review"},
  { path: 'about', component: AboutComponent, title: "About" },
  { path: 'not-found', component: NotFoundComponent, title: "Not Found" },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
