export enum UserType {
	STUDENT = 'student',
	PROFESSOR = 'professor'
}

export interface UserModel {
	email: string;
	password: string;
	type: UserType;
	description: string;
	image: string;
	courses: number[];
}

export class ProfessorModel implements UserModel {
	email: string;
	password: string;
	type: UserType;
	description: string;
	image: string;
	courses: number[];
	title: string;
}

export class StudentModel implements UserModel {
	email: string;
	password: string;
	type: UserType;
	description: string;
	image: string;
	courses: number[];
	followup: {course_id: number, subject_id: number}[];
}
