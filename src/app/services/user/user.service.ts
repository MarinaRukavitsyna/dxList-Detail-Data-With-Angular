import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './../../models/user';

import { handleError } from './../services-utils';

@Injectable()
export class UserService {
  private userUrl = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: Http) { }
  getUsers(): Promise<User[]> {
    return this.http.get(this.userUrl)
      .toPromise()
      .then(response =>  response.json() as User[])
      .catch(handleError);
  }
}