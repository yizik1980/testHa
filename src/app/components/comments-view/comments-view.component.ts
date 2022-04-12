import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { CommentNode } from 'src/app/models/Comment';
import { User } from 'src/app/models/User';
import { CommentsService } from 'src/app/services/comments.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.scss'],
})
export class CommentsViewComponent implements OnInit {
  comments:Array<CommentNode> = [];
  usersHashMap:{[key:string]:User} = {};
  sub = new Subscription();
  constructor(private commentsService: CommentsService, private userService:UserService) {}
  
  ngOnInit(): void {
 this.sub = this.commentsService.getComments()
    .pipe(tap((res) => {
      console.log(res);
      this.comments = res;
    }))
    .pipe(mergeMap(this.userService.getUsers))
    .pipe(tap(users=>{
      this.usersHashMap = users;
    })).subscribe();
  }
}
