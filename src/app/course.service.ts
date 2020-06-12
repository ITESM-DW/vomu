import { CourseModel } from './modules/professor/models/CourseModel';
import {Injectable} from '@angular/core';
import { UserService } from './user.service';
import { SubjectModel } from './modules/professor/models/SubjectModel';
import { Subject } from 'rxjs';
import { StudentModel } from './modules/student/models/StudentModel';
import { ProfessorModel } from './modules/professor/models/ProfessorModel';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { baseUrl } from "./../environments/environment";
import  axios from 'axios';

@Injectable ({
	providedIn: 'root'
})

export class CourseService {
	courseChanged = new Subject<CourseModel[]>(); // TODO One for update/delete, another for adding
	courses: CourseModel[];

	constructor(private userService: UserService, private authService: AuthService) {}

	async addCourse(course: CourseModel) {
		try {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
			};
			await axios.post(`${baseUrl}courses/`, course, config);
			this.courseChanged.next(this.courses);
		} catch (error) {
			console.error(error);
		}
		
	}

	async getCourse(id: string): Promise<CourseModel> {
		try{
			const { data: course } = await axios.get(`${baseUrl}courses/${id}`)
			return course;
		} catch(error){
			console.error(error);
		}
		// const index = this.courses.findIndex(c => c.id === id);
		// if (index > -1) {
		// 	return this.courses[index];
		// }
	}

	async getCoursesByUserId(id: string) : Promise<CourseModel []> {
		try{
			const { data: courses } = await axios.get(`${baseUrl}users/${id}/courses`);
			return courses;
		} catch (error) {
			console.error(error);
		}
	}

	async updateCourse(course: CourseModel): Promise<boolean> {
		return false;
		// try{
		// 	await axios.
		// }
		// const index = this.courses.findIndex(c => c.id === course.id);
		// if (index > -1) {
		// 	this.courses[index] = course;
		// 	this.courseChanged.next(this.courses);
		// 	return true;
		// }
		// return false;
	}

	deleteCourse(id: number): boolean {
		return true;
		// try{

		// 	return true;
		// }catch(error){
		// 	console.error(error);
		// 	return false;
		// }

		// let found = false;
		// this.courses = this.courses.filter(c => {
		// 	if (c.id === id) {
		// 		this.courseChanged.next(this.courses);
		// 		found = true;
		// 	}
		// 	return c.id !== id;
		// });

		// return found;

	}

	async getAllCourses(): Promise<CourseModel[]> {
		try {
			const { data: allCourses } = await axios.get(`${baseUrl}courses/`);
			this.courses = allCourses;
		} catch (error) {
			console.error(error);
		}
		return this.courses;
	}

	async getCourseStudents(id: string): Promise<StudentModel[]> {
		return Promise.all((await this.getCourse(id)).students.map( id => this.userService.getUser(id) as Promise<StudentModel> ));
	}
}
