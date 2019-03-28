import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit() {
  }

  onLoveIt(){
    let numberOfLoveIts = this.postLoveIts;
    numberOfLoveIts++;
    this.postLoveIts = numberOfLoveIts;
  }

  onDontLoveIt() {
    let numberOfLoveIts = this.postLoveIts;
    numberOfLoveIts--;
    this.postLoveIts = numberOfLoveIts;
  }

  getLoveIts() {
    return this.postLoveIts;
  }
}
