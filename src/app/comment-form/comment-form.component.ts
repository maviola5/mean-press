import { Component, OnInit } from '@angular/core';

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
