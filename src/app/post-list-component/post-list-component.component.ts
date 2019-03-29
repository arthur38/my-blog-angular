import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
