import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// export var WORDPRESS_API_URL: string = 'http://localhost/wordpress_nacd/wp-json/wp/v2/';
export var WORDPRESS_API_URL: string = 'http://192.168.100.116:8888/wordpress/wp-json/wp/v2/';

/**
*	Models for http responses
*/

export class Author {
    id: number;
    name: string;

    constructor(obj?: any){
        this.id          = obj && obj.id          || null;
        this.name        = obj && obj.name        || null;
    }
}

export class Category {
    id: number;
    name: string;

    constructor(obj?: any){
        this.id          = obj && obj.id          || null;
        this.name        = obj && obj.name        || null;
    }
}

export class Post {
    id: number;
    date: string;
    title: string;
    content: string;
    excerpt: string;
    author: number;
    authorName: string;
    categories: number[];
    tags: number[];

    constructor(obj?: any){
        this.id          = obj && obj.id          || null;
        this.date        = obj && obj.date        || null;
        this.title       = obj && obj.title       || null;
        this.content     = obj && obj.content     || null;
        this.excerpt     = obj && obj.excerpt     || null;
        this.author      = obj && obj.author      || null;
        this.authorName  = obj && obj.authorName  || null;
        this.categories  = obj && obj.categories  || null;
        this.tags        = obj && obj.tags        || null;
    }
}

export class Comment {
  id: number;
  name: string;
  timestamp: string;
  content: string;
}


@Injectable()
export class WordPressService {

	constructor(
		public http: Http,
		@Inject(WORDPRESS_API_URL) private apiUrl: string
	){}

	getPosts(): Observable<Post[]>{
		let url: string = `${this.apiUrl}posts?per_page=10`;

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
		let url: string = `${this.apiUrl}posts/${id}`;

		return this.http.get(url)
			.map((response: Response) => {
				let item = response.json();
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
		let url: string = `${this.apiUrl}users/${id}`;

		return this.http.get(url)
			.map((response: Response) => {
				let item = response.json();
				return new Author({
					id: item.id,
					name: item.name
				});
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

	searchPosts(term: string): Observable<Post[]> {
		let url: string = `${this.apiUrl}posts?per_page=20&search=${term}`;

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
			})
	}
}

export var wordPressServiceInjectables: Array<any> = [
	{ provide: WordPressService, useClass: WordPressService },
	{ provide: WORDPRESS_API_URL, useValue: WORDPRESS_API_URL }
];