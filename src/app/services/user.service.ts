import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = new Array<User>();
  private usersMapped:{ [key: string]: User } = {};
  get Users() {
    return this.users;
  }
  set Users(val: Array<User>) {
    if (val) {
      this.usersMapped = val.reduce(
        (obj, item) => Object.assign(obj, { [item.id]: item }),
        {}
      )
      this.users = val;
    }
  }
  getUser(id:number| undefined):User{
    return id?  this.usersMapped[id]: {} as User;
  }
  constructor(private httpcall: HttpClient) {}

  getUsersComment(): Observable<{ [key: string]: User }> {
    return this.httpcall.get<User[]>('./assets/users.json').pipe(
      map((res) => {
        this.usersMapped =  res.reduce(
          (obj, item) => Object.assign(obj, { [item.id]: item }),
          {}
        );
        return this.usersMapped;
      })
    );
  }
}
