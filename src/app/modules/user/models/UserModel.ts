export enum UserType {
	STUDENT = 'student',
	PROFESSOR = 'professor'
}

export interface UserModel {
	id: number;
	email: string;
	password: string;
	name: string;
	last: string;
	title: string;
	description: string;
	image: string;
}