import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CourseService } from 'src/app/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseModel } from 'src/app/modules/professor/models/CourseModel';
import { SubjectModel } from 'src/app/modules/professor/models/SubjectModel';
import { StudentModel } from '../../models/StudentModel';

@Component({
	selector: 'app-student-course-view',
	templateUrl: './student-course-view.component.html',
	styleUrls: ['./student-course-view.component.scss']
})
export class StudentCourseViewComponent implements OnInit {
	course: CourseModel;
	subject: SubjectModel;
	user: StudentModel;
	constructor(private authService: AuthService, private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }

	async ngOnInit(): Promise<void> {
		let error = false;
		if (this.authService.isAuth) {
			const courseId = String(this.route.snapshot.paramMap.get('course_id'));
			const subjectId = String(this.route.snapshot.paramMap.get('subject_id'));
			this.user = (await this.authService.getCurrentUserModel()) as StudentModel;

			if ((await this.courseService.getCourseStudents(courseId)).indexOf(this.user) > -1) {
				this.course = (await this.courseService.getCourse(courseId)) as CourseModel;
				this.subject = (await this.course.subjects).filter(s => s.id === subjectId)[0];
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
