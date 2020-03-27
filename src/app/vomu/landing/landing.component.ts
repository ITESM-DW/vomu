import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  images = [
    'assets/images/women.jpg',
    'assets/images/women1.jpg',
    'assets/images/women2.jpg',
    'assets/images/women3.jpg',
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
