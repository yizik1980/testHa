import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = new Array<User>();
  get Users(){
    return this.users;
  }
  set Users(val:Array<User>){
    if(val){
      this.users = val;
    }
  }
  constructor(private http: HttpClient) {}

    getUsers():Observable<{[key:string]:User}>{
      return this.http.get<User[]>('./assets/users.json')
      .pipe(map(res=>{
        return  res.reduce((obj, item) => Object.assign(obj, { [item.id]: item }), {});
      }));
    }



}
