import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { I_User } from '../Model/UserModel';

@Component({
  selector: 'app-users-card3',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css'],
})
export class UsersCard3Component implements OnInit {
  @Input() titleChild!: string;
  @Input() UserListChild!: I_User[];
  @Output() removeUserChild = new EventEmitter<string>();
  @Output() onSubmitChild = new EventEmitter<I_User>();

  constructor() {}

  ngOnInit(): void {}
}
