import { Component, OnInit } from '@angular/core';

import Users from '../../../assets/db-data.json';
import { I_User } from './Model/UserModel';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css'],
})
export class Example2Component implements OnInit {
  public currentTitle: string = 'User Details from Parent';
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
