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
		console.error('here we go again');
		if (await this.authService.isAuth) {
			const courseId = String(this.route.snapshot.paramMap.get('course_id'));
			const subjectId = String(this.route.snapshot.paramMap.get('subject_id'));

			this.course = await this.courseService.getCourse(courseId);
			this.subject = this.course.subjects.filter(s => s._id === subjectId)[0];
			console.log(this.subject);
		} else {
				this.router.navigateByUrl('/');
			}
		}

	}
