import { Injectable } from '@angular/core';
import { UserModel, UserType } from '../modules/shared/models/UserModel';

@Injectable()
export class UserService {
	users: UserModel[] = [
	{
		email: 'cursus.vestibulum.Mauris@idlibero.co.uk',
		password: 'MML35ZLH8SR',
		type: UserType.STUDENT,
		description: 'urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: [3]
	},
	{
		email: 'risus@urnaVivamusmolestie.org',
		password: 'LTD44JET4MU',
		type: UserType.PROFESSOR,
		description: 'vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: [10, 6, 2, 5, 7]
	},
	{
		email: 'egestas.nunc@bibendum.org',
		password: 'RGE87MZH4IB',
		type: UserType.PROFESSOR,
		description: 'felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: [4, 5, 1]
	},
	{
		email: 'sapien.Nunc.pulvinar@estac.co.uk',
		password: 'SVU62FSA2SB',
		type: UserType.PROFESSOR,
		description: 'luctus sit amet, faucibus ut, nulla. Cras eu tellus eu',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: []
	},
	{
		email: 'facilisis@laoreetlibero.edu',
		password: 'EJR81NCL2TW',
		type: UserType.STUDENT,
		description: 'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: [7, 4, 3]
	},
	{
		email: 'malesuada@Praesenteunulla.edu',
		password: 'HXB40CRT9LQ',
		type: UserType.PROFESSOR,
		description: 'Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: [2, 9, 5, 8]
	},
	{
		email: 'tincidunt@tellusPhasellus.net',
		password: 'DAJ12QRX7KN',
		type: UserType.PROFESSOR,
		description: 'leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis,',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: [5]
	},
	{
		email: 'Cras.vehicula@velitAliquamnisl.edu',
		password: 'VQF14AQY5IG',
		type: UserType.STUDENT,
		description: 'ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et,',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: [4]
	},
	{
		email: 'faucibus.leo@musAeneaneget.co.uk',
		password: 'VGC24GOK7MF',
		type: UserType.STUDENT,
		description: 'Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: [3, 5, 4]
	},
	{
		email: 'Vivamus@blanditatnisi.co.uk',
		password: 'LZJ14ERV6ZW',
		type: UserType.STUDENT,
		description: 'quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus',
		image: 'https://source.unsplash.com/collection/190727/400x400',
		courses: [1, 8, 9, 7]
	}];

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

	deleteUser(email: string) {
		this.users = this.users.filter(user => user.email !== email);
	}
}
