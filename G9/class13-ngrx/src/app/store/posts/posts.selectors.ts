import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PostsState } from './posts.reducer';

export const selectPosts = (state: AppState) => {
  console.log(state);
  return state.posts;
};

export const selectAllPosts = createSelector(
  selectPosts,
  (state: PostsState) => state.posts
);
