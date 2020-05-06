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
	title: string;
}

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

export class StudentModel implements UserModel {
	email: string;
	fName: string;
	lName: string;
	password: string;
	type: UserType;
	description: string;
	image: string;
	courses: number[];
	title: string;
	followup: {course_id: number, subject_id: number}[];
}
