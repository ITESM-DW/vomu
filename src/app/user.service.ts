import { UserType } from './modules/user/models/UserModel';
import { Injectable} from '@angular/core';
import { StudentModel } from './modules/student/models/StudentModel';
import { ProfessorModel } from './modules/professor/models/ProfessorModel';

@Injectable ({
	providedIn: 'root'
})

export class UserService {
	users: (StudentModel | ProfessorModel)[] = [
		{
			id: 0,
			email: 'user@gmail.com',
			name: 'Iris',
			last: 'Craft',
			password: 'password',
			type: UserType.STUDENT,
			title: 'PhD.',
			description: 'urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			followup: [{ course_id: 1, subject_id: 2 }, {course_id: 5, subject_id: 2}]
		},
		{
			id: 1,
			email: 'risus@urnaVivamusmolestie.org',
			name: 'Gareth',
			last: 'Monroe',
			password: 'LTD44JET4MU',
			type: UserType.PROFESSOR,
			description: 'vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			courses: [1],
			title: 'PhD'
		},
		{
			id: 2,
			email: 'egestas.nunc@bibendum.org',
			name: 'Violet',
			last: 'Reese',
			password: 'RGE87MZH4IB',
			type: UserType.PROFESSOR,
			description: 'felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			courses: [2],
			title: 'PsyD'
		},
		{
			id: 3,
			email: 'sapien.Nunc.pulvinar@estac.co.uk',
			name: 'Cade',
			last: 'Watkins',
			password: 'SVU62FSA2SB',
			type: UserType.PROFESSOR,
			description: 'luctus sit amet, faucibus ut, nulla. Cras eu tellus eu',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			courses: [3],
			title: 'EdD'
		},
		{
			id: 4,
			email: 'facilisis@laoreetlibero.edu',
			name: 'Ferris',
			last: 'Jarvis',
			password: 'EJR81NCL2TW',
			type: UserType.STUDENT,
			title: 'PhD.',
			description: 'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			followup: [{ course_id: 1, subject_id: 3 }, { course_id: 2, subject_id: 1 }, { course_id: 5, subject_id: 2 } ]
		},
		{
			id: 5,
			email: 'malesuada@Praesenteunulla.edu',
			name: 'Karly',
			last: 'Wilder',
			password: 'HXB40CRT9LQ',
			type: UserType.PROFESSOR,
			description: 'Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			courses: [4],
			title: 'PhD'
		},
		{
			id: 6,
			email: 'tincidunt@tellusPhasellus.net',
			name: 'Hermione',
			last: 'Roman',
			password: 'DAJ12QRX7KN',
			type: UserType.PROFESSOR,
			description: 'leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis,',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			courses: [5],
			title: 'EdD'
		},
		{
			id: 7,
			email: 'Cras.vehicula@velitAliquamnisl.edu',
			name: 'Mary',
			last: 'Hampton',
			password: 'VQF14AQY5IG',
			type: UserType.STUDENT,
			title: 'PhD.',
			description: 'ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et,',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			followup: [{ course_id: 3, subject_id: 2 }, { course_id: 4, subject_id: 1 }, { course_id: 5, subject_id: 1 }]
		},
		{
			id: 8,
			email: 'faucibus.leo@musAeneaneget.co.uk',
			name: 'Omar',
			last: 'Benton',
			password: 'VGC24GOK7MF',
			type: UserType.STUDENT,
			title: 'PhD.',
			description: 'Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			followup: [{ course_id: 3, subject_id: 1 }]
		},
		{
			id: 9,
			email: 'Vivamus@blanditatnisi.co.uk',
			name: 'Yolanda',
			last: 'Cabrera',
			password: 'LZJ14ERV6ZW',
			type: UserType.STUDENT,
			title: 'PhD.',
			description: 'quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus',
			image: 'https://source.unsplash.com/collection/190727/400x400',
			followup: [{ course_id: 4, subject_id: 2 }]
		}
	];

	// Temporary
	nextID() {
		return this.users.length;
	}

	addUser(user: StudentModel | ProfessorModel) {
		this.users.push(user);
		console.log(user);
	}

	getUser(id: number) {
		const index = this.users.findIndex(u => u.id === id);
		if (index > -1) {
			return this.users[index];
		}
		return;
	}

	updateUser(user: StudentModel | ProfessorModel) {
		const index = this.users.findIndex(u => u.id === user.id);
		if (index > -1) {
			this.users[index] = user;
		}
		return;
	}

	deleteUser(id: number) {
		this.users = this.users.filter(user => user.id !== id);
	}

	getUsers(): (StudentModel|ProfessorModel)[] {
		return this.users;
	}

}
