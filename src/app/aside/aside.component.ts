import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  host: {
  	'class': 'aside'
  }
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
