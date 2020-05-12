import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from './user.service';
import { StudentModel } from './modules/student/models/StudentModel';
import { ProfessorModel } from './modules/professor/models/ProfessorModel';

@Injectable({
	providedIn: 'root'
})


export class AuthService {
	user: number;
	authChanged = new Subject<boolean>();
	loggedIn = false;

	constructor(private userService: UserService) { }

	isAuth() {
		this.authChanged.next(this.loggedIn);
		return this.loggedIn;
	}
	getCurrentUser(): number {
		return this.user;
	}
	getCurrentUserModel(): StudentModel | ProfessorModel {
		if (this.isAuth) {
			return this.userService.getUser(this.user);
		}
	}
	login(email: string, pwd: string): boolean {
		const users = this.userService.getUsers();
		for (let i = 0; i < users.length; i++) {
			if (users[i].email === email && users[i].password === pwd) {
				this.loggedIn = true;
				this.user = i;
				this.authChanged.next(this.loggedIn);
				return true;
			}
		}
		return false;
	}
	logout() {
		this.loggedIn = false;
		this.user = null;
		this.authChanged.next(this.loggedIn);
	}
}
