import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comment-thread',
  templateUrl: './comment-thread.component.html',
  styleUrls: ['./comment-thread.component.css'],
  host: {
  	'class' : 'card'
  }
})
export class CommentThreadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
