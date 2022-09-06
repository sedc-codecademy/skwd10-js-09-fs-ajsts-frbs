import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post.interface';

export const fetchPosts = createAction('[Posts] Fetch Posts');

export const fetchPostsSuccess = createAction(
  '[Posts] Fetch Posts Success',
  props<{ posts: Post[] }>()
);

export const postsError = createAction(
  '[Posts] Posts Error',
  props<{ error: string }>()
);
