import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { StudentModel } from '../../models/StudentModel';
import { CourseService } from 'src/app/course.service';
import { GenericCardModel } from 'src/app/modules/user/models/GenericCardModel';

@Component({
	selector: 'app-student-profile',
	templateUrl: './student-profile.component.html',
	styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
	user: StudentModel;
	courses: GenericCardModel[] = [];

	constructor(private authService: AuthService, private userService: UserService, private courseService: CourseService, private router: Router) { }

	ngOnInit(): void {
		if (this.authService.isAuth()) {
			this.user = this.authService.getCurrentUserModel() as StudentModel; // TODO Get id with routing
			console.log(this.user);
			let course;
			console.log(this.courseService.getCoursesByUserId(this.user.id));
			for (course of this.courseService.getCoursesByUserId(this.user.id)) {
				const professor = this.userService.getUser(course.professor);
				this.courses.push(
					new GenericCardModel(
						course.title,
						`${professor.name} ${professor.last}`,
						course.description, course.imgURL,
						`/student/course/${course.id}/${this.user.followup.find(c => c.course_id === course.id).subject_id}`
					)
				);

			}
		} else {
			this.router.navigateByUrl('/');
		}
	}

}
