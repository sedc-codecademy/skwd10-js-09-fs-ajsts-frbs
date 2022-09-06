import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { fetchPosts } from 'src/app/store/posts/posts.actions';
import { selectAllPosts } from 'src/app/store/posts/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  posts$ = this.store.select(selectAllPosts);

  ngOnInit(): void {
    this.store.dispatch(fetchPosts());
    this.initForm();
  }

  initForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
    });
  }

  onFormSubmit() {
    console.log(this.postForm.value);
  }
}
