import { UserModel, UserType } from '../../user/models/UserModel';

export class ProfessorModel implements UserModel {
	id?: string;
	email: string;
	password: string;
	name: string;
	last: string;
	title: string;
	type: UserType = UserType.PROFESSOR;
	description: string;
	image: string;
	courses: number[] = [];

	constructor(email: string,  name: string, last: string, password: string, title: string, description: string, image: string, courses: number[]) {
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
