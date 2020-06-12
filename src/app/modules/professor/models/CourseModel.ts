import { SubjectModel } from './SubjectModel';

export class CourseModel {
	id: string;
	title: string;
	description: string;
	imgURL: string;
	subjects: SubjectModel[];
	students: string[];
	professor: string;

	// TODO Remove id (database) and students (default empty)
	constructor(id: string, title: string, description: string, imgURL: string, subjects: SubjectModel[], students: string[], professor: string) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.imgURL = imgURL;
		this.subjects = subjects;
		this.students = students;
		this.professor = professor;
	}
}
