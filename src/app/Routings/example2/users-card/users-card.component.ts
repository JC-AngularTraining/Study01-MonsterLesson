import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { I_User } from '../model/UserModel';

@Component({
  selector: 'app-users-card2',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css'],
})
export class UsersCard2Component implements OnInit {
  @Input() titleChild!: string;
  @Input() UserListChild!: I_User[];
  @Output() removeUserChild = new EventEmitter<number>();
  @Output() onSubmitChild = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {}
}
