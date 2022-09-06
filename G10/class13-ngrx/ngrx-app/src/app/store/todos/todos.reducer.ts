import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/interfaces/todo.interface';
import { v4 as uuid } from 'uuid';
import { addTodo, finishTodo, removeTodo } from './todos.actions';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [
    {
      id: '94d1849b-5abf-4463-af27-327ad37b387a',
      text: 'Learn about ngrx',
      isFinished: false,
    },
    {
      id: '4870b323-7d77-40cf-b57a-ac4ff7b9e8db',
      text: "Don't be confused about ngrx",
      isFinished: false,
    },
    {
      id: '5eaee9d3-6f62-49a8-9bb2-02b44e42f3f4',
      text: 'Start liking ngrx',
      isFinished: false,
    },
  ],
};

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => {
    const newTodo: Todo = {
      id: uuid(),
      text: text,
      isFinished: false,
    };

    return { ...state, todos: [...state.todos, newTodo] };
  }),
  on(removeTodo, (state, { todoId }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== todoId),
  })),
  on(finishTodo, (state, { todoId }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === todoId ? { ...todo, isFinished: true } : todo
    ),
  }))
);
