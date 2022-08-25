import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  public allPostsSubject = new Subject<Post[]>();
  public singlePostSubject = new Subject<Post>();

  getAllPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((result) => {
        this.allPostsSubject.next(result);
      });
  }

  getPostById(id: number) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((result) => {
        this.singlePostSubject.next(result);
      });
  }
}
