import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';
import {
  addPostSuccess,
  loadPosts,
  loadPostsSuccess,
  postsError,
  updatePostSuccess,
} from './posts.actions';

enum PostsStatus {
  PENDING = 'pending',
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface PostsState {
  posts: Post[];
  error: string | null;
  status: PostsStatus;
}

export const initialState: PostsState = {
  posts: [],
  error: null,
  status: PostsStatus.PENDING,
};

export const postsReducer = createReducer(
  initialState,
  on(loadPosts, (state) => ({ ...state, status: PostsStatus.LOADING })),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
    error: null,
    status: PostsStatus.SUCCESS,
  })),
  on(addPostSuccess, (state, { createdPost: post }) => ({
    ...state,
    posts: [...state.posts, post],
    error: null,
    status: PostsStatus.SUCCESS,
  })),
  on(updatePostSuccess, (state, { updatedPost }) => ({
    ...state,
    posts: state.posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    ),
  })),
  on(postsError, (state, { error }) => ({
    ...state,
    error: error,
    status: PostsStatus.ERROR,
  }))
);
