import { createAction, props } from '@ngrx/store';

// 1. Create a todo
export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ text: string }>()
);
// 2. Finish a todo
export const finishTodo = createAction(
  '[Todos] Finish Todo',
  props<{ todoId: string }>()
);
// 3. Remove a todo
export const removeTodo = createAction(
  '[Todos] Remove Todo',
  props<{ todoId: string }>()
);
