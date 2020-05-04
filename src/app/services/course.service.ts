import { Injectable } from '@angular/core';
import { CourseModel } from '../modules/shared/models/CourseModel';

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
