import { 
	Component, 
	OnInit, 
	Input,
	ElementRef,
	EventEmitter 
} from '@angular/core';
import { WordPressService, Post, Author } from '../wordpress.service';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs';

@Component({
	selector: 'article',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	host : {
		'class' : 'article home'
	}
})
export class HomeComponent implements OnInit {
	@Input() posts: Post[];
	authors: Author[];

	constructor(
		public wordpress: WordPressService
	) {}

	ngOnInit() {

		//init request
		this.wordpress.getPosts()
			.subscribe(
				(results: Post[]) => {
					this.posts = results;
					this.posts = this.posts.map(item => {
						return new Post({
							id: item.id,
							title: item.title,
							author: item.author,
							excerpt: item.excerpt,
							date: item.date
						})
					})
					
				},
				(err: any) => {
					console.log(err);
				},
				() => {
					this.wordpress.getAuthors()
						.subscribe(
							(results: Author[]) => {
								this.authors = results;
								this.posts.map((element, index, array) => {
									for(let x = 0; x < this.authors.length; x++){
										if(element.author === this.authors[x].id){
											element.authorName = this.authors[x].name;
										}
									}
								});
							},
							(err: any) => {},
							() => {}

						);
				}
			);
		 
	}

}
