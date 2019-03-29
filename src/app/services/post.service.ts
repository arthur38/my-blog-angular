import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  postsSubject = new Subject<Post[]>();

  private posts = [
    new Post(
      'Mon premier Post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do'
    ),
    new Post(
      'Mon deuxième Post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do'
    ),
    new Post(
      'Mon troisième Post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do'
    ),
  ];


  emitPostSubject() {
    this.postsSubject.next(this.posts);
  }

  addNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPostSubject();
  }

  removePost(postToRemove: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === postToRemove) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPostSubject();
  }

  addLoveIts(post: Post, numberOfLoveIts: number) {
    const postindexToUpdate = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    post.loveIts++;
    this.posts.splice(postindexToUpdate, 1, post);
    this.emitPostSubject();
  }

  removeLoveIts(post: Post, numberOfLoveIts: number) {
    const postindexToUpdate = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    post.loveIts--;
    this.posts.splice(postindexToUpdate, 1, post);
    this.emitPostSubject();
  }

}
