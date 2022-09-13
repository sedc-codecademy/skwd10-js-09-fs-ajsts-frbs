import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';
import { AppState } from 'src/app/store/app.state';
import {
  addPost,
  loadPosts,
  updatePost,
} from 'src/app/store/posts/posts.actions';
import { selectAllPosts } from 'src/app/store/posts/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$ = this.store.select(selectAllPosts);
  postForm: FormGroup;
  isEdit = false;
  editPostId: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForm();
    this.store.dispatch(loadPosts());
  }

  initForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
    });
  }

  onFormSubmit() {
    const { title, body } = this.postForm.value;
    const id = Math.floor(Math.random() * 10 + 1);
    const newPost = { title, body, userId: id };

    if (!this.isEdit) {
      this.store.dispatch(addPost({ newPost }));
    } else {
      this.store.dispatch(
        updatePost({
          postUpdates: { title, body },
          postId: this.editPostId,
        })
      );
      this.isEdit = false;
    }
    this.postForm.reset();
  }

  onPostEdit(post: Post) {
    this.isEdit = true;
    const { title, body, id } = post;

    this.editPostId = id;
    this.postForm.setValue({
      title,
      body,
    });
  }
}
