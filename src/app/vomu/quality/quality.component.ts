import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {

  images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14].map((n) => `../../../assets/images/validator/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
