import { Component, OnInit } from '@angular/core';

import Users from '../../../assets/db-data.json';
import { I_User, I_Example2Component } from './model/UserModel';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css'],
})
export class Example2Component implements OnInit, I_Example2Component {
  public title: string = 'Example of working from Parent to Child Components';
  public UserList: I_User[] = Users;

  constructor() {}

  ngOnInit(): void {}

  removeUser(id: number): void {
    // console.log(`Delete Button Working`)
    this.UserList = this.UserList.filter((user) => user.userId !== id);
  }

  onSubmit(data: Omit<I_User, 'userId'>): void {
    // e.preventDefault()
    const newData: I_User = { ...data, userId: this.UserList.length + 1 };
    // console.log(data)
    this.UserList.push(newData);
    // console.log(this.UserList)
  }
}
