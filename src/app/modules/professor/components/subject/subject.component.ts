import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'src/app/modules/shared/models/Subject';

@Component({
	selector: 'app-subject',
	templateUrl: './subject.component.html',
	styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
	@Input() subject: Subject;
	constructor() {}

	ngOnInit(): void {
	}

}
