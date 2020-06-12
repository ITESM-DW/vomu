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

	async ngOnInit(): Promise<void> {
		if (this.authService.isAuth()) {
			console.error('1')
			this.user = await this.authService.getCurrentUserModel() as StudentModel; // TODO Get id with routing
			console.error('2')
			console.error(this.user)
			this.userService.userUpdated.subscribe(u => {
				this.user = u as StudentModel;
			});
			console.error('3')
			let course;
			const userCourses = await this.courseService.getCoursesByUserId(this.user.id);
			for (course of userCourses) {
				const professor = await this.userService.getUser(course.professor);
				this.courses.push(
					new GenericCardModel(
						course.title,
						`${professor.name} ${professor.last}`,
						course.description, course.imgURL,
						`/student/course/${course.id}/${this.user.followup.find(c => c.course_id === course._id).subject_id}`
					)
				);

			}
		} else {
			this.router.navigateByUrl('/');
		}
	}

}
