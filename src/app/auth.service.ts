export class AuthService {
	loggedIn = false;
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
