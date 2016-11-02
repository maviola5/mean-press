import { 
	Component, 
	OnInit,
	Output,
	ElementRef,
	EventEmitter
} from '@angular/core';
import { WordPressService, Post, Authors } from '../wordpress.service';
// import { } from 

@Component({
	selector: 'app-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
	@Output() searchResults: EventEmitter<Post[]> = new EventEmitter<Post[]>();

	constructor(
		public wordpress: WordPressService,
		private el: ElementRef
	) {}

	ngOnInit() {
		//init request
		this.wordpress.getPosts()
			.subscribe(
				(results: Post[]) => {
					// this.searchResults = results;
					this.searchResults = this.searchResults.map(item => {
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
