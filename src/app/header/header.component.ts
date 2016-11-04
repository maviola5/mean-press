import { Component, OnInit, EventEmitter, ElementRef, Output } from '@angular/core';
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
	
	constructor(
		public wordpress: WordPressService,
		private el: ElementRef
	) {}

	toggleNav: boolean = false;
	
	ngOnInit() {

	}

}
