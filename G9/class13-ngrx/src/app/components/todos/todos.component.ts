import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/interfaces/todo';
import { AppState } from 'src/app/store/app.state';
import {
  addTodo,
  finishTodo,
  removeTodo,
} from 'src/app/store/todos/todos.actions';
import { selectAllTodos } from 'src/app/store/todos/todos.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$ = this.store.select(selectAllTodos);

  todoForm: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.todoForm = new FormGroup({
      text: new FormControl('', Validators.required),
    });
  }

  onAddTodo() {
    const { text } = this.todoForm.value;
    this.store.dispatch(addTodo({ text }));
    this.todoForm.reset();
  }

  onRemoveTodo(todoId: string) {
    this.store.dispatch(removeTodo({ todoId }));
  }

  onFinishTodo(todoId: string) {
    this.store.dispatch(finishTodo({ todoId }));
  }
}
