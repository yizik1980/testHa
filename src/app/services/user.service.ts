import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

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

    getUsers():Observable<Array<User>>{
      return this.http.get<User[]>('./assets/users.json')
      .pipe(tap(res=>{
        this.Users = res;
      }));
    }



}
