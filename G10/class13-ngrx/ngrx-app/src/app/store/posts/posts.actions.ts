import { createAction, props } from '@ngrx/store';
import { NewPost, Post, PostUpdates } from 'src/app/interfaces/post.interface';

//Actions for fetching posts
export const fetchPosts = createAction('[Posts] Fetch Posts');

export const fetchPostsSuccess = createAction(
  '[Posts] Fetch Posts Success',
  props<{ posts: Post[] }>()
);
//Actions for adding a post
export const addPost = createAction(
  '[Posts] Add Post',
  props<{ newPost: NewPost }>()
);

export const addPostSuccess = createAction(
  '[Posts] Add Post Success',
  props<{ post: Post }>()
);
//Actions for updating a post
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
