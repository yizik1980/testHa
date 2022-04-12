import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CommentsViewComponent } from './components/comments-view/comments-view.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsViewComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
