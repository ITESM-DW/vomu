import { Subject } from './Subject';
import { UserModel } from './UserModel';

export class CourseModel {
	id: number;
	title: string;
	description: string;
	subjects: Subject[];
	students: string[];
	teacher: string;
}
