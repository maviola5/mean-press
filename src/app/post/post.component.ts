import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../wordpress.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  host: {
  	class : 'card'
  }
})
export class PostComponent implements OnInit {
	@Input() post: Post;

	constructor() { }

	ngOnInit() {}
}
