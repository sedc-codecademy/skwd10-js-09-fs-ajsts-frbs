import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit, OnDestroy {
  private postId: number;
  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.postId = this.activatedRoute.snapshot.params['id'];
  }
  currentPost: Post;
  postSubscription: Subscription;
  ngOnInit(): void {
    this.postsService.getPostById(this.postId);
    this.postSubscription = this.postsService.singlePostSubject.subscribe({
      next: (post) => (this.currentPost = post),
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
