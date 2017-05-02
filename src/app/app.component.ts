import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { Service } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'List of users';
  selectedUser: User;
  dataSource: any;

  constructor(private service: Service) { 
    this.dataSource = service.getServiceUrl();  
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit(): void {
    
  }
}