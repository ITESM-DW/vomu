import { SubjectModel } from './SubjectModel';

export class CourseModel {
	_id?: string;
	title: string;
	description: string;
	imgURL: string;
	subjects: SubjectModel[];
	students: string[];
	professor: string;

	// TODO Remove id (database) and students (default empty)
	constructor(title: string, description: string, imgURL: string, subjects: SubjectModel[], students: string[], professor: string) {
		this.title = title;
		this.description = description;
		this.imgURL = imgURL;
		this.subjects = subjects;
		this.students = students;
		this.professor = professor;
	}
}
