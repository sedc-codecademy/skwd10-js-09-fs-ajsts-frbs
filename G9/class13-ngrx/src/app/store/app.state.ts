import { ActionReducerMap } from '@ngrx/store';
import { postsReducer, PostsState } from './posts/posts.reducer';
import { todosReducer, TodoState } from './todos/todos.reducer';

export interface AppState {
  todos: TodoState;
  posts: PostsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todosReducer,
  posts: postsReducer
};
