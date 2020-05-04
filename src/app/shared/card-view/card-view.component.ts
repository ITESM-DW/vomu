import { Component, OnInit } from '@angular/core';

// Import models.
import { GenericCardModel } from '../../models/GenericCardModel';

@Component({
	selector: 'app-card-view',
	templateUrl: './card-view.component.html',
	styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
	cardDetails: GenericCardModel[] = [];

	constructor() {}

	ngOnInit(): void {
		this.cardDetails = [
			{
				title: 'Introduction to Algorithms 101',
				body: 'Introduction to Algorithms...',
				buttons: [
					{
						href: 'view.html',
						name: 'View',
					},
				],
			},
			{
				title: 'Introduction to Discrete Mathematics 101',
				body: 'Introduction to Discrete Mathematics...',
				buttons: [
					{
						href: 'view.html',
						name: 'View',
					},
				],
			},
			{
				title: 'Introduction to Computational Mathematics 101',
				body: 'Introduction to Computational Mathematics...',
				buttons: [
					{
						href: 'view.html',
						name: 'View',
					},
				],
			},
			{
				title: 'Introduction to Operating Systems 101',
				body: 'Introduction to Operation Systems...',
				buttons: [
					{
						href: 'view.html',
						name: 'View',
					},
				],
			},
		];
	}
}
