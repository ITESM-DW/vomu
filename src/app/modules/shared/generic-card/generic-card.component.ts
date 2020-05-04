import { Component, OnInit, Input } from '@angular/core';
import { GenericCardModel } from '../models/GenericCardModel';

@Component({
	selector: 'app-generic-card',
	templateUrl: './generic-card.component.html',
	styleUrls: ['./generic-card.component.scss'],
})
export class GenericCardComponent implements OnInit {
	@Input() cardDetail: GenericCardModel;

	constructor() {}

	ngOnInit(): void {}

	getObjectKeys(obj) {
		console.error(Object.keys(obj));
		return Object.keys(obj);
	}
}
