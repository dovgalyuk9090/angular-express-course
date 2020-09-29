import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../shared/user';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: User[] = [];

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }

  // tslint:disable-next-line:typedef
  search(value: string) {
    this.usersList = this.userService.findUser(value);
  }

  // tslint:disable-next-line:typedef
  sort(value: string) {
    console.log(value);
    this.usersList = this.userService.sortUsers(value);
  }

}
