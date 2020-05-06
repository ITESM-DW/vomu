import { UserService } from './user.service';
import { UserType } from './models/UserModel';
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
		const student = this.userService.getUserInfo(email);
		if(student != undefined)
		{
			if(student.type === UserType.STUDENT)
			{
				course.students.push(email);
				student.courses.push(id);
			}
			else
			{
				console.log("Teachers can't be registered.")
			}
		}
		else {
			console.log("User not found.")
		}
	}

	unregisterCourse(id:number, email:string) {
		const course = this.courseService.getCourse(id);
		const student = this.userService.getUserInfo(email);
		if(student != undefined)
		{
			if(student.type === UserType.STUDENT)
			{
				course.students = course.students.filter(studentid => studentid !== email);
				student.courses = student.courses.filter(courseid => courseid !== id);
			}
			else
			{
				console.log("Teachers can't unregister")
			}
		}
		else {
			console.log("User not found.")
		}
		
	}
}
