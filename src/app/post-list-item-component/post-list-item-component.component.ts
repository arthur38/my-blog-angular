import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postcreatedAt: Date;
  @Input() post: Post;

  constructor(private postService: PostService) {}

  ngOnInit() {
  }

  onAddLoveIt(post: Post) {
    this.postLoveIts++;
    this.postService.addLoveIts(post, this.postLoveIts);
  }

  onRemoveLoveIt(post: Post) {
    this.postLoveIts--;
    this.postService.removeLoveIts(post, this.postLoveIts);

  }

  onRemovePost(post: Post) {
    this.postService.removePost(post);
  }
}
