import { Component, OnInit } from '@angular/core';

import Users from '../../../assets/db-data.json';
import { I_User } from './Model/UserModel';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
})
export class Example1Component implements OnInit {
  public UserList: I_User[] = Users;

  constructor() {}

  ngOnInit(): void {}

  removeUser(id: number): void {
    // console.log(`Delete Button Working`)
    this.UserList = this.UserList.filter((user) => user.userId !== id);
  }

  onSubmit(data: any) {
    // e.preventDefault()
    data.userId = this.UserList.length + 1;
    // console.log(data)
    this.UserList.push(data);
    // console.log(this.UserList)
  }
}
