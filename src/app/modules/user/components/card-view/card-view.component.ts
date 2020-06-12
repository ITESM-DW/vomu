import { Component, OnInit, Input } from '@angular/core';
import { GenericCardModel } from '../../models/GenericCardModel';
import { CourseService } from '../../../../course.service';
import { UserService } from '../../../../user.service';
import { Router, ActivatedRoute } from '@angular/router';

// Import models.

@Component({
	selector: 'app-card-view',
	templateUrl: './card-view.component.html',
	styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
	@Input() cardDetails: GenericCardModel[] = [];

	p: number = 1;

	constructor() {}

	ngOnInit(): void {
	}
}
