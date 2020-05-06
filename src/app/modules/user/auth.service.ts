import { UserService } from './user.service';
import { CourseService } from '../professor/course.service';
import { CourseModel } from '../professor/models/CourseModel';
import { UserModel } from './models/UserModel';
import { Injectable } from '@angular/core';

@Injectable ({
	providedIn: 'root'
})


export class AuthService {
	constructor(public userService : UserService, public courseService : CourseService) {}

	loggedIn = false;
	isAuth() {
		return this.loggedIn;
	}
	createUser(user : (StudentModel|ProfessorModel)) {
		this.userService.getUsers().push(user);

	}
	deleteUser(email: string) {
		this.userService.deleteUser(email);
	}
	login() {
		this.loggedIn = true;
	}
	logout() {
		this.loggedIn = false;
	}
}
