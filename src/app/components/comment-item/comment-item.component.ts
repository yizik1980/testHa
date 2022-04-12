import { Component, Input, OnInit } from '@angular/core';
import { CommentNode } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input()
  node:CommentNode | undefined = { } as CommentNode;
  constructor() { }

  ngOnInit(): void {
  }

}
