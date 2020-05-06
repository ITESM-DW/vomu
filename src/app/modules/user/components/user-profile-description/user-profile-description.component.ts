import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';

@Component({
	selector: 'app-user-profile-description',
	templateUrl: './user-profile-description.component.html',
	styleUrls: ['./user-profile-description.component.scss'],
})
export class UserProfileDescriptionComponent implements OnInit {
	@Output() askEdition = new EventEmitter<number>();
	editBtn = 0;

	@Input() user: StudentModel | ProfessorModel;

	constructor() {}

	ngOnInit(): void {}

	enableEdition(): void {
		this.editBtn = 1;
		console.log('Variable change');
		this.askEdition.emit(this.editBtn);
	}
}
