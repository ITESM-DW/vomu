import { UserModel, UserType } from '../../user/models/UserModel';

export class StudentModel implements UserModel {
	_id?: string;
	email: string;
	password: string;
	name: string;
	last: string;
	title: string;
	type: UserType = UserType.STUDENT;
	description: string;
	image: string;
	followup: { course_id: string, subject_id: string; }[];

	constructor(email: string,  name: string, last: string, password: string, title: string, description: string, image: string, followup: { course_id: string, subject_id: string }[] = []) {
		this.email = email;
		this.name = name;
		this.last = last;
		this.password = password;
		this.title = title;
		this.description = description;
		this.image = image;
		this.followup = followup;
	}
}
