import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Post } from './post';
import { Author } from './author';
import { Category } from './category';

export var WORDPRESS_API_URL: string = 'http://localhost/wordpress_nacd/wp-json/wp/v2/';
// export var WORDPRESS_API_URL: string = 'http://192.168.100.116:8888/wordpress/wp-json/wp/v2/';

@Injectable()
export class WordPressService {

	constructor(
		public http: Http,
		@Inject(WORDPRESS_API_URL) private apiUrl: string
	){}

	getPosts(): Observable<Post[]>{
		let url: string = `${this.apiUrl}posts?per_page=5`;

		return this.http.get(url)
			.map((response: Response) => {
				return (<any>response.json()).map(item => {
					return new Post({
						id: item.id,
						date: item.date,
						title: item.title.rendered,
						content: item.content.rendered,
						excerpt: item.excerpt.rendered,
						author: item.author,
						categories: item.categories,
						tags: item.tags
					});
				});
			});
	}

	getPost(id: number): Observable<Post> {
		let queryUrl = `${this.apiUrl}posts/${id}`;

		return this.http.get(queryUrl)
			.map((response: Response) => {
				return (<any>response.json()).map(item => {
					return new Post({
						id: item.id,
						date: item.date,
						title: item.title.rendered,
						content: item.content.rendered,
						excerpt: item.excerpt.rendered,
						author: item.author,
						categories: item.categories,
						tags: item.tags
					});
				});
			});

	}

	getAuthors(): Observable<Author[]>{
		let url: string = `${this.apiUrl}users?per_page=100`;

		return this.http.get(url)
			.map((response: Response) => {
				return (<any>response.json()).map(item => {
					return new Author({
						id: item.id,
						name: item.name
					});
				});
			});
	}

	getAuthor(id: number): Observable<Author> {
		let queryUrl: string = `${this.apiUrl}author/${id}`;

		return this.http.get(queryUrl)
			.map((response: Response) => {
				return (<any>response.json()).map(item => {
					return new Author({
						id: item.id,
						name: item.name
					});
				})
			})
	}

	getCategories(): Observable<Category[]>{
		let url: string = `${this.apiUrl}categories?per_page=100`;

		return this.http.get(url)
			.map((response: Response) => {
				return (<any>response.json()).map(item => {
					return new Category({
						id: item.id,
						name: item.name
					});
				})
			});
	}
}

export var wordPressServiceInjectables: Array<any> = [
	{ provide: WordPressService, useClass: WordPressService },
	{ provide: WORDPRESS_API_URL, useValue: WORDPRESS_API_URL }
];