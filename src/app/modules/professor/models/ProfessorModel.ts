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

	constructor(id: number, email: string, password: string, name: string, last: string, title: string, description: string, image: string) {
		// ID is Temporary
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.last = last;
		this.title = title;
		this.description = description;
		this.image = image;
	}
}
