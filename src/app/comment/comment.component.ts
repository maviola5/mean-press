import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  host : {
  	'class' : 'card'
  }
})
export class CommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}