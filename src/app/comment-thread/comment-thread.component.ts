import { Component, OnInit } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

import { WordPressService, Comment } from '../wordpress.service';

const COMMENTS: Comment[] = [
  { id: 11, name: 'Mr. Nice', timestamp: 'December 30, 2016', content: '<p>Hello World</p>' },
  { id: 11, name: 'Mr. Nice', timestamp: 'December 30, 2016', content: '<p>Hello World</p>' },
  { id: 11, name: 'Mr. Nice', timestamp: 'December 30, 2016', content: '<p>Hello World</p>' },
  { id: 11, name: 'Mr. Nice', timestamp: 'December 30, 2016', content: '<p>Hello World</p>' }
];

@Component({
  selector: 'comment-thread',
  templateUrl: './comment-thread.component.html',
  styleUrls: ['./comment-thread.component.css'],
  host: {
  	'class' : 'card'
  }
})
export class CommentThreadComponent implements OnInit {
  comments: Comment[];

	



  constructor(comments: Comment[]) { 
    this.comments = COMMENTS;
  }

  ngOnInit() {
  }

}
