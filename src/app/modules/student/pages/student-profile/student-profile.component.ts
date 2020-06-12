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
		try {
			if (await this.authService.isAuth) {
				try {
					this.user = (await this.authService.getCurrentUserModel()) as StudentModel; // TODO Get id with routing
				} catch (error) {
					throw error;
				}
				try {
					this.userService.userUpdated.subscribe(u => {
						this.user = u as StudentModel;
					});
				} catch (error) {
					throw error;
				}
				try {
					const userCourses = await this.courseService.getCoursesByUserId(this.user._id);

					// tslint:disable-next-line: prefer-for-of
					for (let i = 0; i < userCourses.length; i++) {
						const professor = await this.userService.getUser(userCourses[i].professor);
						this.courses.push(
							new GenericCardModel(
								userCourses[i].title,
								`${professor.name} ${professor.last}`,
								userCourses[i].description, userCourses[i].imgURL,
								`/student/course/${userCourses[i]._id}/${this.user.followup.find(c => c.course_id === userCourses[i]._id).subject_id}`
							)
						);
					}
				} catch (error) {
					console.error('self righteous suicide');
					throw error;
				}
			} else {
				this.router.navigateByUrl('/');
			}
		} catch (error) {
			console.error('chop suey');
		}
	}

}
