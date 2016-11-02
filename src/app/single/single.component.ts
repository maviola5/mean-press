import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WordPressService, Post, Author } from '../wordpress.service';

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
		private route: ActivatedRoute,
		// private router: Router,
		private wordpress: WordPressService
	) {}

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];

			this.wordpress.getPost(id)
			.subscribe(
				(result: Post) => {
					this.post = result;
					this.post.excerpt = null;
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
