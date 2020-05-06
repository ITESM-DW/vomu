export enum UserType {
	STUDENT = 'student',
	PROFESSOR = 'professor'
}

export interface UserModel {
	email: string;
	fName: string;
	lName: string;
	password: string;
	type: UserType;
	description: string;
	image: string;
	courses: number[];
}
