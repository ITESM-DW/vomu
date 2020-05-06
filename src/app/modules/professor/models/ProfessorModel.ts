import { UserModel, UserType } from '../../user/models/UserModel';

export class ProfessorModel implements UserModel {
	email: string;
	fName: string;
	lName: string;
	password: string;
	type: UserType;
	description: string;
	image: string;
	courses: number[];
	title: string;
}
