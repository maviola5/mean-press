import { Component, OnInit } from '@angular/core';
import { WordPressService, Comment } from '../wordpress.service';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
  host : {
  	'class' : 'card'
  }
})
export class CommentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
