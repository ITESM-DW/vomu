import { Subject } from './Subject';
import { UserModel } from './UserModel';

export class Course {
	id: number;
	title: string;
	description: string;
	subjects: Subject[];
	students: UserModel[];
	teacher: UserModel;
}
