import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';
import { UserType } from 'src/app/modules/user/models/UserModel';

@Component({
	selector: 'app-generic-table',
	templateUrl: './generic-table.component.html',
	styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
	fetchedUsers: (StudentModel | ProfessorModel)[];
	visualUsers: (StudentModel | ProfessorModel)[];

	currentFilter: UserType;

	constructor(private userService: UserService) { }

	async ngOnInit(): Promise<void> {
	// Initial fetch all users and filter by default(STUDENT).
	this.fetchedUsers = await this.userService.getUsers();
	this.visualUsers = this.fetchedUsers.filter((user) => user.type === UserType.STUDENT);

	// Base filter type as student.
	this.currentFilter = UserType.STUDENT;
	}

	filterUsers(filterVal: UserType): void {
		if (filterVal === UserType.PROFESSOR) {
			this.visualUsers = this.fetchedUsers.filter((user) => user.type === UserType.PROFESSOR);
		} else if (filterVal === UserType.STUDENT) {
			this.visualUsers = this.fetchedUsers.filter((user) => user.type === UserType.STUDENT);
		}
		this.currentFilter = filterVal;
	}

	async deleteUser(user: StudentModel | ProfessorModel): Promise<void> {
		await this.userService.deleteUser(user._id);

		// TODO(kevinwkt): subscribe to delete but refresh for now.
		this.fetchedUsers = await this.userService.getUsers();
		this.filterUsers(this.currentFilter);
	}
}
