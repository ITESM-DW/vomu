import { UserModel } from './models/UserModel';

export class UserService {
	users: UserModel[] = [];
	getUserInfo() {
		// TODO(kevinwkt): Ask emilio what should go here instead.
		return this.users[0];
	}
	updateUserInfo(user: UserModel) {
		const index = this.users.findIndex(u => u.email === user.email);
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
