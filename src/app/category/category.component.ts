import { Component, OnInit } from '@angular/core';
import { WordPressService, Post } from '../wordpress.service';

@Component({
	selector: 'article',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css'],
	host : {
	'class' : 'article'
	}
})
export class CategoryComponent implements OnInit {
	posts: Post[];

	constructor(
		private wordpress: WordPressService
	){}

	ngOnInit(){

	}

}
