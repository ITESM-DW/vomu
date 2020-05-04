import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UserModel } from './models/UserModel';
import { UserType } from './models/UserModel';
import { CourseService } from './course.service';
import { StudentService } from './student.service';
import { AuthService } from './auth.service';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'vomu';

	users;
	courses;
	user2;
	course;
	coursesAll;
	x;
	y;
	z;

	constructor(private userService : UserService, private courseService : CourseService, private studentService: StudentService, private authService: AuthService) {

		this.users = this.userService.getUsers();
		this.courses = this.userService.getUserCourses("risus@urnaVivamusmolestie.org");
		this.user2 = this.userService.getUserInfo("cursus.vestibulum.Mauris@idlibero.co.uk");

		this.course = this.courseService.getCourse(1);
		this.coursesAll = this.courseService.getAllCourses();


		this.studentService.unregisterCourse(5,"cursus.vestibulum.Mauris@idlibero.co.uk");
		this.studentService.registerCourse(1,"abc");
		this.authService.createAccount({
			"email": "email added",
			"password": "MML35ZLH8SR",
			"type": UserType.STUDENT,
			"description": "urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus",
			"image": "https://source.unsplash.com/collection/190727/400x400",
			"courses": [3]
		})

		this.x = this.courseService.getCourseStudents(1);
		this.y = this.courseService.getCourseStudents(5);


	}

}
