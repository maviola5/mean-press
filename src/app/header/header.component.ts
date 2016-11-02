import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { WordPressService, Post, Author } from '../wordpress.service';


@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	host : {
		'class' : 'header'
	}
})
export class HeaderComponent implements OnInit {
	searchResults: EventEmitter<Post[]> = new EventEmitter<Post[]>();
	
	constructor(
		public wordpress: WordPressService,
		private el: ElementRef
	) {}

	toggleSearch: boolean = false;
	toggleNav: boolean = false;
	
	ngOnInit() {

		//keyup to Observable
		Observable.fromEvent(this.el.nativeElement, 'keyup')
			.map((e: any) => e.target.value)
			.filter((text: string) => text.length > 1)
			.debounceTime(250)
			// .do(() => this.loading.next(true))
			.map((query: string) => this.wordpress.searchPosts(query))
			.switch()
			.subscribe(
				(results: Post[]) => {
					this.searchResults.next(results);
				},
				(err: any) => {
					console.log(err);
				},
				() => {
					console.log(this.searchResults);
				}
			);

	}

}
