import { UserModel, UserType } from './models/UserModel';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	users: UserModel[] = [
		{
			email: 'string',
			password: 'string',
			type: UserType.STUDENT,
			description: 'string',
			image: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80',
			courses: []
		}
	];
	getUserInfo() {
		return this.users[0];
	}

	updateUserInfo(user: UserModel) {
		const index = this.users.findIndex(u => u.email === user.email);
		this.users[index] = user;
	}

	getUserCourses() {	}

	getUsers() {
		return this.users;
	}

	deleteUser() {	}
}
