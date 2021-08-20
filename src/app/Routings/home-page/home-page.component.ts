import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public mainTitle: string = `Justin's First Angular App!!`;
  public mainSubTitle: string = `Learnings from Monster Lessons`;

  constructor() {}

  ngOnInit(): void {}
}
