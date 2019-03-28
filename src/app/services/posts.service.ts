import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  posts = [
    new Post(
      'Mon premier Post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do ' +
      'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
      'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
      'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
      'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
      'mollit anim id est laborum.'
    ),
    new Post(
      'Mon deuxième Post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do ' +
      'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
      'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
      'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
      'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
      'mollit anim id est laborum.'
    ),
    new Post(
      'Mon troisième Post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do ' +
      'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
      'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
      'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
      'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
      'mollit anim id est laborum.'
    ),
  ];


}
