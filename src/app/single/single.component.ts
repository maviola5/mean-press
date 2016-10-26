import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
  host : {
  	'class' : 'article'
  }
})
export class SingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
