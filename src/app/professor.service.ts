import { UserService } from './user.service';
import { CourseService } from './course.service';
import { CourseModel } from './models/CourseModel';
import { Injectable } from '@angular/core';

@Injectable ({
	providedIn: 'root'
})

export class ProfessorService {
	constructor(public userService : UserService, public courseService : CourseService) {}

	createCourse(course: CourseModel){
		const teacher = this.userService.getUserInfo(course.teacher);
		if(teacher != undefined)
		{
			this.courseService.getAllCourses().push(course);
			teacher.courses.push(course.id);
			console.log("registered");
		}
	}

}
