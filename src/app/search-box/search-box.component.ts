import { 
	Component, 
	OnInit,
	Output,
	ElementRef,
	EventEmitter,
	Input
} from '@angular/core';
import { Observable } from 'rxjs';
import { WordPressService, Post, Author } from '../wordpress.service';
// import { } from 

@Component({
	selector: 'search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.css'],
	host: {
		class : 'search-box'
	}
})
export class SearchBoxComponent implements OnInit {
	@Output() searchResults: EventEmitter<Post[]> = new EventEmitter<Post[]>();
	toggleSearch: boolean = false;
	searchTerm: string;
	posts: Post[];

	constructor(
		public wordpress: WordPressService,
		private el: ElementRef
	) {}

	ngOnInit(): void {

		Observable.fromEvent(this.el.nativeElement, 'keyup')
		.map((e: any) => {
			this.searchTerm = e.target.value;
			// console.log(this.searchTerm);
			if(e.target.value.length === 0){
				setTimeout(() => {
					this.posts = [];
				}, 500);
			}
			return e.target.value;
		})
		.filter((text: string) => text.length > 1)
		.debounceTime(250)
		.map((query: string) => {
			console.log(query);
			return this.wordpress.searchPosts(query)
		})
		.switch()
		.subscribe(
			(results: Post[]) => {
				this.searchResults.next(results);
				this.posts = results.map(item => {
					return new Post({
						id: item.id,
						title: item.title,
						excerpt: item.excerpt,
						date: item.date
					})
				});
			},
			(err: any) => {
				console.log(err);
			},
			() => {
				// this.loading.next(fals)
			}
		);
	}
}
