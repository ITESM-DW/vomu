import { UserModel, UserType } from '../../user/models/UserModel';

export class ProfessorModel implements UserModel {
	id: number;
	email: string;
	password: string;
	name: string;
	last: string;
	title: string;
	type: UserType = UserType.PROFESSOR;
	description: string;
	image: string;
	courses: number[] = [];

	constructor(id: number, email: string,  name: string, last: string, password: string, title: string, description: string, image: string, courses: number[]) {
		// ID is Temporary
		this.id = id;
		this.email = email;
		this.name = name;
		this.last = last;
		this.password = password;
		this.title = title;
		this.description = description;
		this.image = image;
		this.courses = courses;
	}
}
