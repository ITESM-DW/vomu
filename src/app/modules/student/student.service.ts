import { Injectable } from '@angular/core';
import { UserService } from '../../user.service';
import { CourseService } from '../../course.service';
import { UserType } from '../user/models/UserModel';
import { StudentModel } from './models/StudentModel';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { baseUrl } from "./../../../environments/environment";
import  axios from 'axios';
import { CourseModel } from '../professor/models/CourseModel';

@Injectable({
	providedIn: 'root'
})


export class StudentService {
	constructor(public userService: UserService, public courseService: CourseService) { }

	async getStudent(id: string): Promise<StudentModel> {
		return await this.userService.getCurrentUser() as StudentModel;
	}

	async registerCourse(studentId: string, courseId: string) {
		try {
		const course = await this.courseService.getCourse(courseId);
		const user = await this.userService.getCurrentUser() as StudentModel;
		course.students.push(studentId);
		user.followup.push({course_id: courseId, subject_id: "1"});

		this.userService.updateUser(user);
		this.courseService.updateCourse(course);
		} catch(error){
			console.error(error);
		}
	}

	async unregisterCourse(studentId: string, courseId: string) {
		const course = await this.courseService.getCourse(courseId) as CourseModel;
		const student = await this.userService.getCurrentUser() as StudentModel;

		course.students = course.students.filter(sId => studentId !== sId);
		student.followup = student.followup.filter(({course_id}) => courseId !== course_id);

		await this.courseService.updateCourse(course);
		this.userService.updateUser(student);
	}

	async updateCourse(studentId: string, courseId: string, subjectId: string) {
		const student = await this.userService.getUser(studentId) as StudentModel;
		student.followup.map(({course_id, subject_id}) => {
			if (course_id === courseId) {
				subject_id = subjectId;
			}
		});
		await this.userService.updateUser(student);
	}
}
