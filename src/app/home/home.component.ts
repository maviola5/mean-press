import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host : {
  	'class' : 'article'
  }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
