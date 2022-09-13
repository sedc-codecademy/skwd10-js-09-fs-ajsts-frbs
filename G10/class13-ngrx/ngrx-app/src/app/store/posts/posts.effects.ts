import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import {
  addPost,
  addPostSuccess,
  fetchPosts,
  fetchPostsSuccess,
  postsError,
  updatePost,
  updatePostSuccess,
} from './posts.actions';

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

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPost),
      switchMap(({ newPost }) =>
        this.postsService.createNewPost(newPost).pipe(
          map((post) => addPostSuccess({ post })),
          catchError((error) => of(postsError(error)))
        )
      )
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePost),
      switchMap(({ postUpdates, postId }) =>
        this.postsService.patchPost(postUpdates, postId).pipe(
          map((post) => updatePostSuccess({ updatedPost: post })),
          catchError((error) => of(postsError(error)))
        )
      )
    )
  );
}
