import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService, private router: Router) {}
  postsSubscription: Subscription;
  postsArray: Post[];

  ngOnInit(): void {
    this.postsService.getAllPosts();
    this.postsSubscription = this.postsService.allPostsSubject.subscribe({
      next: (posts) => (this.postsArray = posts),
      error: (err) => console.log(err),
    });
  }

  singlePostNavigate(post: Post) {
    this.router.navigate(['posts', post.id]);
  }
}
