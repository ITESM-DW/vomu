import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { UserType } from '../../models/UserModel';

@Component({
	selector: 'app-user-profile-description',
	templateUrl: './user-profile-description.component.html',
	styleUrls: ['./user-profile-description.component.scss'],
})
export class UserProfileDescriptionComponent implements OnInit {
	@Input() user: StudentModel | ProfessorModel;
	userTypes = UserType;

	constructor() {}

	ngOnInit(): void {
	}
}
