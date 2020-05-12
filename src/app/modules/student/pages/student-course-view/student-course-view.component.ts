import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CourseService } from 'src/app/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseModel } from 'src/app/modules/professor/models/CourseModel';
import { SubjectModel } from 'src/app/modules/professor/models/SubjectModel';

@Component({
	selector: 'app-student-course-view',
	templateUrl: './student-course-view.component.html',
	styleUrls: ['./student-course-view.component.scss']
})
export class StudentCourseViewComponent implements OnInit {
	course: CourseModel;
	subject: SubjectModel;
	user: number;
	constructor(private authService: AuthService, private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit(): void {
		let error = false;
		if (this.authService.isAuth) {
			const courseId = Number(this.route.snapshot.paramMap.get('course_id'));
			const subjectId = Number(this.route.snapshot.paramMap.get('subject_id'));
			this.user = this.authService.getCurrentUser();

			if (this.courseService.getCourseStudents(courseId).indexOf(this.user) > -1) {
				this.course = this.courseService.getCourse(courseId);
				this.subject = this.course.subjects.filter(s => s.id === subjectId)[0];
			} else {
				error = true;
			}
		} else {
			error = true;
		}
		if (error) {
			this.router.navigateByUrl('/');
		}
	}

}
