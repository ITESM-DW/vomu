import { UserModel } from './models/UserModel';
import { StudentModel } from './models/UserModel';
import { ProfessorModel } from './models/UserModel';
import { UserType } from './models/UserModel';
import {Injectable} from '@angular/core';

@Injectable ({
	providedIn: 'root'
})

export class UserService {
	users: (StudentModel|ProfessorModel)[] = [
		{
			"email": "cursus.vestibulum.Mauris@idlibero.co.uk",
			"fName": "Iris",
			"lName": "Craft",
			"password": "MML35ZLH8SR",
			"type": UserType.STUDENT,
			"description": "urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [3],
			"followup":[]
		},
		{
			"email": "cursus.vestibulum.Mauris@idlibero.co.uk",
			"fName": "Iris",
			"lName": "Craft",
			"password": "MML35ZLH8SR",
			"type": UserType.STUDENT,
			"description": "urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [3],
			"followup":[]
		},
		{
			"email": "risus@urnaVivamusmolestie.org",
			"fName": "Gareth",
			"lName": "Monroe",
			"password": "LTD44JET4MU",
			"type": UserType.PROFESSOR,
			"description": "vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [10, 6, 2, 5, 7],
			"title": "PhD"
		},
		{
			"email": "egestas.nunc@bibendum.org",
			"fName": "Violet",
			"lName": "Reese",
			"password": "RGE87MZH4IB",
			"type": UserType.PROFESSOR,
			"description": "felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [4, 5, 1],
			"title": "PsyD"
		},
		{
			"email": "sapien.Nunc.pulvinar@estac.co.uk",
			"fName": "Cade",
			"lName": "Watkins",
			"password": "SVU62FSA2SB",
			"type": UserType.PROFESSOR,
			"description": "luctus sit amet, faucibus ut, nulla. Cras eu tellus eu",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [],
			"title": "EdD"
		},
		{
			"email": "facilisis@laoreetlibero.edu",
			"fName": "Ferris",
			"lName": "Jarvis",
			"password": "EJR81NCL2TW",
			"type": UserType.STUDENT,
			"description": "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [7, 4, 3],
			"followup":[]
		},
		{
			"email": "malesuada@Praesenteunulla.edu",
			"fName": "Karly",
			"lName": "Wilder",
			"password": "HXB40CRT9LQ",
			"type": UserType.PROFESSOR,
			"description": "Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [2, 9, 5, 8],
			"title": "PhD"
		},
		{
			"email": "tincidunt@tellusPhasellus.net",
			"fName": "Hermione",
			"lName": "Roman",
			"password": "DAJ12QRX7KN",
			"type": UserType.PROFESSOR,
			"description": "leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis,",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [5],
			"title": "EdD"
		},
		{
			"email": "Cras.vehicula@velitAliquamnisl.edu",
			"fName": "Mary",
			"lName": "Hampton",
			"password": "VQF14AQY5IG",
			"type": UserType.STUDENT,
			"description": "ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et,",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [4],
			"followup":[]
		},
		{
			"email": "faucibus.leo@musAeneaneget.co.uk",
			"fName": "Omar",
			"lName": "Benton",
			"password": "VGC24GOK7MF",
			"type": UserType.STUDENT,
			"description": "Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [3, 5, 4],
			"followup":[]
		},
		{
			"email": "Vivamus@blanditatnisi.co.uk",
			"fName": "Yolanda",
			"lName": "Cabrera",
			"password": "LZJ14ERV6ZW",
			"type": UserType.STUDENT,
			"description": "quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [1, 8, 9, 7],
			"followup":[]
		}
	];

	getUserInfo(email: string) {
		const index = this.users.findIndex(u => u.email === email);
		if(index > -1)
		{
			return this.users[index];
		}
		return;
	}

	updateUserInfo(user: (StudentModel|ProfessorModel)) {
		const index = this.users.findIndex(u => u.email === user.email);
		if(index > -1)
		{
			this.users[index] = user;
		}
		return;
	}

	getUserCourses(email: string): number[] {
		const index = this.users.findIndex(u => u.email === email);
		if(index > -1)
		{
			return this.users[index].courses;
		}
		return;
	}

	getUsers(): (StudentModel|ProfessorModel)[] {
		return this.users;
	}

	

	deleteUser(email: string) {
		this.users = this.users.filter(user => user.email !== email);
	}
}
