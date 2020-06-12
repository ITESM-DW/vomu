import { Component, OnInit, Input } from '@angular/core';
import { GenericCardModel } from '../../models/GenericCardModel';

// Import models.

@Component({
	selector: 'app-card-view',
	templateUrl: './card-view.component.html',
	styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
	@Input() cardDetails: GenericCardModel[] = [];

	p = 1;

	constructor() { }

	ngOnInit(): void {
	}
}
