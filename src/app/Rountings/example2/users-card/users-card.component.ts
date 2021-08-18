import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Example2Component } from '../example2.component';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css'],
})
export class UsersCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() UserList: any;
  @Output() removeUserChild = new EventEmitter();
  @Output() onSubmitChild = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
