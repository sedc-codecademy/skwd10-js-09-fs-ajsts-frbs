import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { fetchPosts, fetchPostsSuccess, postsError } from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  fetchPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPosts),
      switchMap(() =>
        this.postsService.getAllPosts().pipe(
          map((posts) => fetchPostsSuccess({ posts })),
          catchError((error) => of(postsError(error)))
        )
      )
    )
  );
}
