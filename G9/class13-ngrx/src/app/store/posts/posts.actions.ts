import { createAction, props } from '@ngrx/store';
import { NewPost, Post, PostUpdates } from 'src/app/interfaces/post';

export const loadPosts = createAction('[Posts] Load Posts');

export const loadPostsSuccess = createAction(
  '[Posts] Post Load Success',
  props<{ posts: Post[] }>()
);

export const addPost = createAction(
  '[Posts] Add Post',
  props<{ newPost: NewPost }>()
);

export const addPostSuccess = createAction(
  'Posts Add Post Success',
  props<{ createdPost: Post }>()
);

export const updatePost = createAction(
  '[Posts] Update Post',
  props<{ postUpdates: PostUpdates; postId: number }>()
);

export const updatePostSuccess = createAction(
  '[Posts] Update Post Success',
  props<{ updatedPost: Post }>()
);

export const postsError = createAction(
  '[Posts] Posts Error',
  props<{ error: string }>()
);
