import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { WordPressService } from '../wordpress.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'article',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host : {
  	'class' : 'article'
  }
})
export class HomeComponent implements OnInit {
	@Input() posts: Post[];
  authors: Author[];

  constructor(
    public http: Http,
    public wordpress: WordPressService
  ) {}

  ngOnInit() {
    this.wordpress.getPosts()
      .subscribe(
        (results: Post[]) => {
          this.posts = results;
          console.log(this.posts);
        },
        (err: any) => {
          console.log(err);
        },
        () => {
          this.wordpress.getAuthors()
            .subscribe(
              (results: Author[]) => {
                this.authors = results;
                this.posts.map((element, index, array) => {
                  for(let x = 0; x < this.authors.length; x++){
                    if(element.author === this.authors[x].id){
                      element.authorName = this.authors[x].name;
                    }
                  }
                });
              },
              (err: any) => {},
              () => {}

            );
        }
      );
  }

}
