import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  // all routes below start with /movies when used in browser
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'add',
    component: AddMovieComponent,
  },
  {
    path: 'edit',
    component: EditMovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
