import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { CategoryComponent } from './category/category.component';

// comment components
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentThreadComponent } from './comment-thread/comment-thread.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'single', component: SingleComponent },
  { path: 'category', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations : [
  	HomeComponent,
    SingleComponent,
    CategoryComponent,
    CommentComponent,
    CommentFormComponent,
    CommentThreadComponent
  ],
  providers: [
  	{ provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class MeanPressRoutingModule {}
