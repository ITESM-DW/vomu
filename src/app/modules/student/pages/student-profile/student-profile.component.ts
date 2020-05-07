import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { StudentModel } from '../../models/StudentModel';
import { CourseModel } from 'src/app/modules/professor/models/CourseModel';
import { CourseService } from 'src/app/modules/user/course.service';
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
			this.user = this.userService.getUser(this.authService.getCurrentUser()) as StudentModel; // TODO Get id with routing
			this.courseService.getCoursesByUserId(this.user.id).forEach(course => {
				const professor = this.userService.getUser(course.professor);
				this.courses.push(
					new GenericCardModel(
						course.title,
						`${professor.name} ${professor.last}`,
						course.description, course.imgURL,
						`/student/course/${course.id}/${this.user.followup.find(c => c.course_id === course.id).subject_id}`
					)
				);
			});
		} else {
			this.router.navigateByUrl('/');
		}
	}

}
