import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: String;
  @Input() postContent: String;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;

  ngOnInit() {
  }

  onLoveIt(){
    let numberOfLoveIts = this.postLoveIts;
    numberOfLoveIts++;
    this.postLoveIts = numberOfLoveIts;
  }

  onDontLoveIt(){
    let numberOfLoveIts = this.postLoveIts;
    numberOfLoveIts--;
    this.postLoveIts = numberOfLoveIts;
  }

  getLoveIts(){
    return this.postLoveIts
  }
}
