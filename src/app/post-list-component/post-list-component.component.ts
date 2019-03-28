import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.posts;
  }
}
