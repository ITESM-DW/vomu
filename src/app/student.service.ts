import { UserService } from './user.service';
import { CourseService } from './course.service';
import { CourseModel } from './models/CourseModel';
import { Injectable } from '@angular/core';

@Injectable ({
	providedIn: 'root'
})


export class StudentService {
	constructor(public userService : UserService, public courseService : CourseService) {}
	
	registerCourse(id:number, email:string) {
		const course = this.courseService.getCourse(id);
		course.students.push(email);
	}

	unregisterCourse(id:number, email:string) {
		const course = this.courseService.getCourse(id);
		course.students = course.students.filter(id => id !== email);
	}
}
