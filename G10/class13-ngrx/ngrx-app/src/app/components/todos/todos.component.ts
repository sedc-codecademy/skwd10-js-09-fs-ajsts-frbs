import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {
  addTodo,
  finishTodo,
  removeTodo,
} from 'src/app/store/todos/todos.actions';
import { selectAllTodos } from 'src/app/store/todos/todos.selector';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todoForm: FormGroup;

  //We get the observable and render it using the async pipe
  todos$ = this.store.select(selectAllTodos);

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
    //Dispatch add todo action
    this.store.dispatch(addTodo({ text }));
    this.todoForm.reset();
  }

  onFinishTodo(todoId: string) {
    this.store.dispatch(finishTodo({ todoId }));
  }

  onRemoveTodo(todoId: string) {
    //Dispatch remove todo action
    this.store.dispatch(removeTodo({ todoId }));
  }
}
