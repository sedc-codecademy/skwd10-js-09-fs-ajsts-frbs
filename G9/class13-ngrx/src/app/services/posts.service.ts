import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewPost, Post, PostUpdates } from '../interfaces/post';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get(POSTS_URL).pipe(map((posts) => posts as Post[]));
  }

  createNewPost(post: NewPost) {
    return this.http.post(POSTS_URL, post).pipe(map((post) => post as Post));
  }

  updatePost(postUpdates: PostUpdates, postId: number) {
    return this.http
      .patch(`${POSTS_URL}/${postId}`, postUpdates)
      .pipe(map((post) => post as Post));
  }
}
