import { Component, OnInit } from '@angular/core';

import { User } from './models/user';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'List of users';
  selectedUser: User;
  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);    
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}