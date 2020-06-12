import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from 'src/app/modules/professor/models/CourseModel';
import { CourseService } from 'src/app/course.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/modules/user/models/UserModel';
import { AuthService } from 'src/app/auth.service';

@Component({
	selector: 'app-general-course-view',
	templateUrl: './general-course-view.component.html',
	styleUrls: ['./general-course-view.component.scss']
})
export class GeneralCourseViewComponent implements OnInit {
	course: CourseModel;
	currentUser: UserModel;
	loggedIn: boolean;
	constructor(private courseService: CourseService, private route: ActivatedRoute, private authService: AuthService) {
	}

	async ngOnInit(): Promise<void> {
		this.loggedIn = this.authService.loggedIn;
		const courseId = String(this.route.snapshot.paramMap.get('course_id'));

		this.course = (await this.courseService.getCourse(courseId)) as CourseModel;
	}

}
