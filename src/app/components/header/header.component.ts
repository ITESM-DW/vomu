import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from 'src/app/modules/professor/models/CourseModel';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	@Input() input: {title: string, description: string};
	constructor() {}

	ngOnInit(): void {

	}
}
