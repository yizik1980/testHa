import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { CommentData, CommentNode } from '../models/Comment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  root = new Array<CommentNode>();
  constructor(private http: HttpClient, private userService:UserService) { }
  setCommentsTree(commentsData:Array<CommentData>):Array<CommentNode>{
    const hashList:{[key: string]: CommentNode} = {};
    let root:CommentData = {} as CommentData;
    commentsData.forEach(c=>{
      if(hashList[c.id] === undefined){
        hashList[c.id] = {...c,children:[]} as CommentNode;
      }
    });
    console.log(hashList)
    for(let prop in hashList){
      let item = hashList[prop];
      if(item.parentCommentId && hashList[item.parentCommentId]){
        hashList[item.parentCommentId].children.push(item);
      }
    }
    return Object.values(hashList).filter(hl=>hl.children.length>1);
  }
  getComments():Observable<Array<CommentNode>> {
    return this.http.get<CommentData[]>('./assets/comments.json')
    .pipe(map(res=>{
      return this.setCommentsTree(res);
    }));
  }
}
