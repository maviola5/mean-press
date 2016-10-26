import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host : {
  	'class' : 'block column app-container'
  }
})
export class AppComponent {
  title = 'app works!';
}
