import { Component, OnInit } from '@angular/core';

import Users from '../../../assets/db-data.json'; // import the data from local JSON file.
import { I_User, I_Example1Component } from './model/UserModel'; // TS - Created an interface for the data.

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
})
export class Example1Component implements OnInit, I_Example1Component {
  public title: string = `Example of working within 1 component`;
  public UserList: I_User[] = Users; // TS - put 'public' which is the default modifier but just wanted to get use to seeing them.
  // TS - Set the structure with interface and initialised with the actual data.

  constructor() {}

  ngOnInit(): void {}

  removeUser(id: number): void {
    // TS - Declared the type on the argument and set to void as no return.
    // console.log(`Delete Button Working`)
    this.UserList = this.UserList.filter((user) => user.userId !== id);
  }

  onSubmit(data: Omit<I_User, 'userId'>): void {
    // TS - Declared the type on the argument and set to void as no return.
    // e.preventDefault()
    const newData: I_User = { ...data, userId: this.UserList.length + 1 };
    // data.userId = this.UserList.length + 1;
    // console.log(data)
    this.UserList.push(newData);
    // console.log(this.UserList)
  }
}
