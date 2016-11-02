import { Component, OnInit } from '@angular/core';
import { 
	WordPressService, 
	Category, 
	Post, 
	Author 
} from '../wordpress.service';

@Component({
	selector: 'aside',
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.css'],
	host: {
		'class': 'aside'
	}
})

export class AsideComponent implements OnInit {
	categories: Category[];
	posts: Post[];
	authors: Author[];

	constructor(
		private wordpress: WordPressService
	) { }

	ngOnInit() {
		this.wordpress.getCategories()
		.subscribe(
			(results: Category[]) => {
				this.categories = results;
			},
			(err: any) => {
				console.log(err);
			},
			() => {}
		);

		this.wordpress.getPosts()
		.subscribe(
			(results: Post[]) => {
				this.posts = results.map(item => {
					return new Post({
						id: item.id,
						title: item.title,
						author: item.author,
						date: item.date
					});
				});

			},
			(err: any) => {},
			() => {
				this.wordpress.getAuthors()
				.subscribe(
					(results: Author[]) => {
						this.authors = results;
					},
					(err: any) => {
						console.log(err);
					},
					() => {
						for(let x = 0; x < this.posts.length; x++){
							for(let i = 0; i < this.authors.length; i++){
								if(this.posts[x].author === this.authors[i].id){
									this.posts[x].authorName = this.authors[i].name;
									console.log(this.posts[x].authorName);
								}
							}
						}
					}
				);
			}
		);
	}

}
