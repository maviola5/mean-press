import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  host : {
  	'class' : 'article'
  }
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
