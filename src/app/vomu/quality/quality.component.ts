import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {

  images = [1, 2, 3].map((n) => `../../../assets/images/validator/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
