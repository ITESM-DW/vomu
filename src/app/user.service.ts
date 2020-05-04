import { UserModel } from './models/UserModel';

export class UserService {
	users: UserModel[] = [];
	getUserInfo() {

	}
	updateUserInfo(user: UserModel) {
		const index = this.users.findIndex(u => u.username === user.username);
		this.users[index] = user;
	}
	getUserCourses() {

	}
	getUsers() {
		return this.users;
	}
	deleteUser() {

	}
}
