import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewPost, Post, PostUpdates } from '../interfaces/post.interface';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get(POSTS_URL).pipe(map((data) => data as Post[]));
  }

  createNewPost(newPost: NewPost): Observable<Post> {
    return this.http.post(POSTS_URL, newPost).pipe(map((data) => data as Post));
  }

  patchPost(postUpdates: PostUpdates, postId: number): Observable<Post> {
    return this.http
      .patch(`${POSTS_URL}/${postId}`, postUpdates)
      .pipe(map((data) => data as Post));
  }
}
