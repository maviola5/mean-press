import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

// Services
import { wordPressServiceInjectables } from './wordpress.service';

// Root Component
import { AppComponent } from './app.component';

// Base Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';

// Routed Components
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { CategoryComponent } from './category/category.component';

// comment components
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentThreadComponent } from './comment-thread/comment-thread.component';
import { PostComponent } from './post/post.component';
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'posts/:id', component: SingleComponent },
  { path: '', component: HomeComponent }
   // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    SingleComponent,
    CategoryComponent,
    CommentComponent,
    CommentFormComponent,
    CommentThreadComponent,
    PostComponent,
    SearchBoxComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    wordPressServiceInjectables,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
