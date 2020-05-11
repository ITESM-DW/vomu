import { Injectable } from '@angular/core';
import { UserService } from '../../user.service';
import { CourseService } from '../../course.service';
import { UserType } from '../user/models/UserModel';
import { StudentModel } from './models/StudentModel';

@Injectable({
	providedIn: 'root'
})


export class StudentService {
	constructor(public userService: UserService, public courseService: CourseService) { }

	getStudent(id: number): StudentModel {
		return this.userService.getUser(id) as StudentModel;
	}

	registerCourse(studentId: number, courseId: number) {
		const course = this.courseService.getCourse(courseId);
		const student = this.getStudent(studentId);
		if (student !== undefined) {
			if (student.type === UserType.STUDENT) {
				course.students.push(studentId);
				student.followup.push({course_id: courseId, subject_id: 1});

				this.userService.updateUser(student);
				this.courseService.updateCourse(course);
			} else {
				console.log('Teachers can\'t be registered.');
			}
		} else {
			console.log('User not found.');
		}
	}

	unregisterCourse(studentId: number, courseId: number) {
		const course = this.courseService.getCourse(courseId);
		const student = this.getStudent(studentId);

		course.students = course.students.filter(sId => studentId !== sId);
		student.followup = student.followup.filter(({course_id}) => courseId !== course_id);

		this.courseService.updateCourse(course);
		this.userService.updateUser(student);
	}

	updateCourse(studentId: number, courseId: number, subjectId: number) {
		const student = this.getStudent(studentId);
		student.followup.map(({course_id, subject_id}) => {
			if (course_id === courseId) {
				subject_id = subjectId;
			}
		});
		this.userService.updateUser(student);
	}
}
