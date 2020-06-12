import { UserType } from './modules/user/models/UserModel';
import { Injectable } from '@angular/core';
import { StudentModel } from './modules/student/models/StudentModel';
import { ProfessorModel } from './modules/professor/models/ProfessorModel';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	userUpdated = new Subject<StudentModel | ProfessorModel>();
	users: (StudentModel | ProfessorModel)[] = [
		new StudentModel(
			0,
			'user@gmail.com',
			'Iris',
			'Craft',
			'password',
			'PhD.',
			'urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus',
			'https://source.unsplash.com/collection/190727/400x400',
			[{ course_id: 1, subject_id: 2 }, { course_id: 2, subject_id: 1 }, { course_id: 3, subject_id: 1 }, { course_id: 4, subject_id: 1 }, { course_id: 5, subject_id: 2 }]
		),
		new ProfessorModel(
			1,
			'professor@gmail.com',
			'Gareth',
			'Monroe',
			'password',
			'PhD',
			'vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras',
			'https://source.unsplash.com/collection/190727/400x400',
			[1],

		),
		new ProfessorModel(
			2,
			'egestas.nunc@bibendum.org',
			'Violet',
			'Reese',
			'RGE87MZH4IB',
			'PsyD',
			'felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit',
			'https://source.unsplash.com/collection/190727/400x400',
			[2],
		),
		new ProfessorModel(
			3,
			'sapien.Nunc.pulvinar@estac.co.uk',
			'Cade',
			'Watkins',
			'SVU62FSA2SB',
			'EdD',
			'luctus sit amet, faucibus ut, nulla. Cras eu tellus eu',
			'https://source.unsplash.com/collection/190727/400x400',
			[3],
		),
		new StudentModel(
			4,
			'facilisis@laoreetlibero.edu',
			'Ferris',
			'Jarvis',
			'EJR81NCL2TW',
			'PhD.',
			'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
			'https://source.unsplash.com/collection/190727/400x400',
			[{ course_id: 1, subject_id: 3 }, { course_id: 2, subject_id: 1 }, { course_id: 5, subject_id: 2 }]
		),
		new ProfessorModel(
			5,
			'malesuada@Praesenteunulla.edu',
			'Karly',
			'Wilder',
			'HXB40CRT9LQ',
			'PhD',
			'Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet',
			'https://source.unsplash.com/collection/190727/400x400',
			[4],
		),
		new ProfessorModel(
			6,
			'tincidunt@tellusPhasellus.net',
			'Hermione',
			'Roman',
			'DAJ12QRX7KN',
			'EdD',
			'leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis,',
			'https://source.unsplash.com/collection/190727/400x400',
			[5],
		),
		new StudentModel(
			7,
			'Cras.vehicula@velitAliquamnisl.edu',
			'Mary',
			'Hampton',
			'VQF14AQY5IG',
			'PhD.',
			'ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et,',
			'https://source.unsplash.com/collection/190727/400x400',
			[{ course_id: 3, subject_id: 2 }, { course_id: 4, subject_id: 1 }, { course_id: 5, subject_id: 1 }]
		),
		new StudentModel(
			8,
			'faucibus.leo@musAeneaneget.co.uk',
			'Omar',
			'Benton',
			'VGC24GOK7MF',
			'PhD.',
			'Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc',
			'https://source.unsplash.com/collection/190727/400x400',
			[{ course_id: 3, subject_id: 1 }]
		),
		new StudentModel(
			9,
			'Vivamus@blanditatnisi.co.uk',
			'Yolanda',
			'Cabrera',
			'LZJ14ERV6ZW',
			'PhD.',
			'quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus',
			'https://source.unsplash.com/collection/190727/400x400',
			[{ course_id: 4, subject_id: 2 }]
		)
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
			if (this.users[index] instanceof StudentModel) {
				return this.users[index] as StudentModel;
			} else if (this.users[index] instanceof ProfessorModel) {
				return this.users[index] as ProfessorModel;
			}
		}
		return;
	}

	updateUser(user: StudentModel | ProfessorModel) {
		const index = this.users.findIndex(u => u.id === user.id);
		if (index > -1) {
			this.users[index] = user;
			this.userUpdated.next(this.users[index]);
		}
		return;
	}

	deleteUser(id: number) {
		this.users = this.users.filter(user => user.id !== id);
	}

	getUsers(): (StudentModel | ProfessorModel)[] {
		return this.users;
	}

}
