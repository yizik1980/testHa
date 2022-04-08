import { Component, OnInit } from '@angular/core';
import { CommentNode } from 'src/app/models/Comment';
import { User } from 'src/app/models/User';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.scss'],
})
export class CommentsViewComponent implements OnInit {
  comments:Array<CommentNode> = [];
  usersHashMap:{[key:string]:User} = {};
  constructor(private commentsService: CommentsService) {}
  
  ngOnInit(): void {
    this.commentsService.getComments()
    .subscribe((res) => {
      console.log(res);
      this.comments = res;
    });
  }
}
