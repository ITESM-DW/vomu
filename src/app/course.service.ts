import { CourseModel } from './models/CourseModel';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
	courses: CourseModel[] = [];

	getCourse() {
		// TODO(kevinwkt): Ask emilio what to do here.
		return this.courses[0];
	}

	searchCourse() {

	}

	editCourse() {

	}

	deleteCourse() {

	}

	getAllCourses() {

	}
}
