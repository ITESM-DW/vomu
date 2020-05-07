import { SubjectModel } from './SubjectModel';

export class CourseModel {
	id: number;
	title: string;
	description: string;
	imgURL: string;
	subjects: SubjectModel[];
	students: number[];
	professor: number;

	constructor(title: string, description: string, imgURL: string, subjects: SubjectModel[], professor: number) {
		this.title = title;
		this.description = description;
		this.imgURL = imgURL;
		this.subjects = subjects;
		this.professor = professor;
	}
}
