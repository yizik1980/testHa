import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = new Array<User>();
  get Users() {
    return this.users;
  }
  set Users(val: Array<User>) {
    if (val) {
      this.users = val;
    }
  }
  constructor(private httpcall: HttpClient) {}

  getUsersComment(): Observable<{ [key: string]: User }> {
    return this.httpcall.get<User[]>('./assets/users.json').pipe(
      map((res) => {
        return res.reduce(
          (obj, item) => Object.assign(obj, { [item.id]: item }),
          {}
        );
      })
    );
  }
}
