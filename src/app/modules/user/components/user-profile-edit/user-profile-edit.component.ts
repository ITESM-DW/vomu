import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';

@Component({
	selector: 'app-user-profile-edit',
	templateUrl: './user-profile-edit.component.html',
	styleUrls: ['./user-profile-edit.component.scss'],
})
export class UserProfileEditComponent implements OnInit {
	@Input() user: (StudentModel | ProfessorModel);
	@Output() editionSave = new EventEmitter<number>();
	editBtn = 1;

	constructor(private userService: UserService) {}

	ngOnInit(): void {}

	disableEdition(): void {
		this.userService.updateUserInfo(this.user);
		this.editBtn = 0;
		this.editionSave.emit(this.editBtn);
	}
}
