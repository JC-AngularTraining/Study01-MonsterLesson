import { Component, OnInit } from '@angular/core';

import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  title: string = 'Monster-Lesson-Academy - Angular For Beginners';
  faGlobeAmericas = faGlobeAmericas;

  constructor() {}

  ngOnInit(): void {}
}
