import { SubjectModel } from './SubjectModel';

export class CourseModel {
	id: number;
	title: string;
	description: string;
	imgURL: string;
	subjects: SubjectModel[];
	students: number[];
	professor: number;

	// TODO Remove id (database) and students (default empty)
	constructor(id: number, title: string, description: string, imgURL: string, subjects: SubjectModel[], students: number[], professor: number) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.imgURL = imgURL;
		this.subjects = subjects;
		this.students = students;
		this.professor = professor;
	}
}
