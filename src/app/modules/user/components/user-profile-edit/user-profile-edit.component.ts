import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';
import { UserType } from '../../models/UserModel';

@Component({
	selector: 'app-user-profile-edit',
	templateUrl: './user-profile-edit.component.html',
	styleUrls: ['./user-profile-edit.component.scss'],
})
export class UserProfileEditComponent implements OnInit {
	@Input() user: (StudentModel | ProfessorModel);
	userTypes = UserType;

	constructor(private userService: UserService) {}

	ngOnInit(): void {}
}
