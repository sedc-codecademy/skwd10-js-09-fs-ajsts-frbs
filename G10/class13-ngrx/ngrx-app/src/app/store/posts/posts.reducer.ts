import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post.interface';
import { fetchPosts, fetchPostsSuccess, postsError } from './posts.actions';

export enum PostStatus {
  PENDING = 'pending',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PostState {
  posts: Post[];
  error: string | null;
  status: PostStatus;
}

export const initialState: PostState = {
  posts: [],
  error: null,
  status: PostStatus.PENDING,
};

export const postsReducer = createReducer(
  initialState,
  on(fetchPosts, (state) => ({ ...state, status: PostStatus.LOADING })),
  on(fetchPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
    statsu: PostStatus.SUCCESS,
  })),
  on(postsError, (state, { error }) => ({
    ...state,
    error: error,
    status: PostStatus.ERROR,
  }))
);
