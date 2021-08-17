import { Component, OnInit } from '@angular/core';
import Users from '../../assets/db-data.json'
import { I_User } from './Model/UserModel';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  public UserList: I_User[] = Users;

  constructor() { }

  ngOnInit(): void {
  }

}
