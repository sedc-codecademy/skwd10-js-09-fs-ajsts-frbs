import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ text: string }>()
);

export const removeTodo = createAction(
  '[Todos] Remove Todo',
  props<{ todoId: string }>()
);

export const finishTodo = createAction(
  '[Todos] Finish Todo',
  props<{ todoId: string }>()
);
