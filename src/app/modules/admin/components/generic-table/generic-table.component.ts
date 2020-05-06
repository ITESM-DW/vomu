import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import { UserModel, UserType } from 'src/app/modules/shared/models/UserModel';

@Component({
	selector: 'app-generic-table',
	templateUrl: './generic-table.component.html',
	styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
	fetchedUsers: UserModel[];
	visualUsers: UserModel[];

	currentFilter: UserType;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
	// Initial fetch all users and filter by default(STUDENT).
	this.fetchedUsers = this.userService.getUsers();
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

	deleteUser(user: UserModel): void {
		this.userService.deleteUser(user.email);

		// TODO(kevinwkt): subscribe to delete but refresh for now.
		this.fetchedUsers = this.userService.getUsers();
		this.filterUsers(this.currentFilter);
	}
}
