import { UserModel, UserType } from '../../user/models/UserModel';


export class StudentModel implements UserModel {
	email: string;
	fName: string;
	lName: string;
	password: string;
	type: UserType;
	description: string;
	image: string;
	courses: number[];
	followup: { course_id: number, subject_id: number; }[];
}
