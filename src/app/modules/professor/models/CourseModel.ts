import { Subject } from './Subject';

export class CourseModel {
	id: number;
	title: string;
	description: string;
	subjects: Subject[];
	students: string[];
	teacher: string;
}
