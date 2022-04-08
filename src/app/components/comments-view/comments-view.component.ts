import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.scss'],
})
export class CommentsViewComponent implements OnInit {
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getComments()
    .subscribe((res) => {
      console.log(res);
    });
  }
}
