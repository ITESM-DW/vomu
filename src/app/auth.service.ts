import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
	loggedIn = true;
	isAuth() {
		return this.loggedIn;
	}
	createAccount() {
	}
	deleteAccount() {
	}
	login() {
		this.loggedIn = true;
	}
	logout() {
		this.loggedIn = false;
	}
}
