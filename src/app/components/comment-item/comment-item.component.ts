import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommentNode } from 'src/app/models/Comment';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input()
  node: CommentNode | undefined = {} as CommentNode;
  hasPhoto = false;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (this.node) {
      this.node.user = this.userService.getUser(this.node?.ownerId);
      this.hasPhoto =  this.node?.ownerId < 7 ;
    }
  }
}
