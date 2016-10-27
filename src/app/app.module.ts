import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MeanPressRoutingModule } from './app-routing.module.ts';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
// import { CommentComponent } from './comment/comment.component';
// import { CommentFormComponent } from './comment-form/comment-form.component';
// import { CommentThreadComponent } from './comment-thread/comment-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent
    // CommentFormComponent,
    // CommentThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MeanPressRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
