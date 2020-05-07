import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SubjectModel } from '../../models/SubjectModel';

@Component({
	selector: 'app-subject',
	templateUrl: './subject.component.html',
	styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
	@Input() subject: SubjectModel;
	constructor() {}

	ngOnInit(): void {
	}

}
