import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post, PostUpdates } from 'src/app/interfaces/post.interface';
import { AppState } from 'src/app/store/app.state';
import {
  addPost,
  fetchPosts,
  updatePost,
} from 'src/app/store/posts/posts.actions';
import { selectAllPosts } from 'src/app/store/posts/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postForm: FormGroup;
  isEdit: boolean = false;
  editPostId: number;

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
    if (!this.isEdit) {
      //Dispatch add post action
      const newPost = { ...this.postForm.value, userId: 1 };
      this.store.dispatch(addPost({ newPost }));
    } else {
      //Dispatch update post action
      const postUpdates: PostUpdates = { ...this.postForm.value };
      this.store.dispatch(updatePost({ postUpdates, postId: this.editPostId }));
      this.isEdit = false;
      this.editPostId = null;
    }

    this.postForm.reset();
  }

  onPostEdit(post: Post) {
    this.isEdit = true;

    const { id, title, body } = post;

    this.editPostId = id;

    this.postForm.setValue({
      title,
      body,
    });
  }
}
