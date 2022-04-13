import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, mergeMap, Subscription, switchMap } from 'rxjs';
import { merge } from 'rxjs/internal/operators/merge';
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
export class CommentsViewComponent implements OnInit, OnDestroy {
  comments: Array<CommentNode> = [];
  usersHashMap: { [key: string]: User } = {};
  sub = new Subscription();
  constructor(
    private commentsService: CommentsService,
    private userService: UserService
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.userService
      .getUsersComment()
      .pipe(
        tap((users) => {
          this.usersHashMap = users;
        })
      )
      .pipe(switchMap(this.commentsService.getComments.bind(this.commentsService)))
      .subscribe((res) => {
        this.comments = res;
      });
  }
}
