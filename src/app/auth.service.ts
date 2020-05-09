import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from './user.service';
import { UserType } from './modules/user/models/UserModel';

@Injectable({
	providedIn: 'root'
})


export class AuthService {
	user: number;
	authChanged = new Subject<boolean>();
	loggedIn = false;

	constructor(private userService: UserService) { }

	isAuth() {
		console.log(this.loggedIn);
		return this.loggedIn;
	}
	getCurrentUser() {
		return this.user;
	}
	getType(email: string): UserType
	{
		const users = this.userService.getUsers();
		for (let i = 0; i < users.length; i++) {
			if (users[i].email === email)
			{
				return users[i].type;
			}
		}
	}
	login(email: string, pwd: string): boolean {
		const users = this.userService.getUsers();
		console.log(users);
		for (let i = 0; i < users.length; i++) {
			if (users[i].email === email && users[i].password === pwd) {
				console.log(users[i]);
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
