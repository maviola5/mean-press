import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { Author } from '../author';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { WordPressService } from '../wordpress.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'article',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
  host : {
  	'class' : 'article'
  }
})
export class SingleComponent implements OnInit {
	@Input() post: Post;
	author: Author;

  constructor(
  	public http: Http,
  	private wordpress: WordPressService,
  	private route: ActivatedRoute,
  	private router: Router
  ) {}

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		console.log(params);
	  	let id = +params['id'];
	  	console.log(id);

	  	this.wordpress.getPost(id)
		  	.subscribe(
		  		(result: Post) => {
		  			this.post = result;
		  			console.log(this.post);
		  		},
		  		(err: any) => {
		  			console.log(err);
		  		},
		  		() => {
		  			this.wordpress.getAuthor(this.post.author)
		  				.subscribe(
		  					(result: Author) => {
		  						this.author = result;
		  						this.post.authorName = this.author.name;
		  						console.log(this.author)
		  					},
		  					(err: any) => {
		  						console.log(err);
		  					},
		  					() => {}
		  				);
		  		}
		  	);
	  	});
  }

}
