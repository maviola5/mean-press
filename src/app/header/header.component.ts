import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host : {
  	'class' : 'header'
  }
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
