import { Component, OnInit } from '@angular/core';
import { Comment } from '../wordpress.service';

@Component({
  selector: 'comment',
  inputs: ['comment'],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  host : {
  	'class' : 'card'
  }
})
export class CommentComponent implements OnInit {

	comment: Comment;

	constructor() {}

	ngOnInit() {}

}
