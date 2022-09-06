import { ActionReducerMap } from '@ngrx/store';
import { postsReducer, PostState } from './posts/posts.reducer';
import { todosReducer, TodoState } from './todos/todos.reducer';

export interface AppState {
  todos: TodoState;
  posts: PostState;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todosReducer,
  posts: postsReducer,
};
