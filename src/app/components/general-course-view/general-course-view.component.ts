import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from 'src/app/modules/professor/models/CourseModel';
import { CourseService } from 'src/app/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-general-course-view',
	templateUrl: './general-course-view.component.html',
	styleUrls: ['./general-course-view.component.scss']
})
export class GeneralCourseViewComponent implements OnInit {
	course: CourseModel;
	constructor(private courseService: CourseService, private route: ActivatedRoute) {
	}

	async ngOnInit(): Promise<void> {
		console.error('1')
		const courseId = String(this.route.snapshot.paramMap.get('course_id'));
		console.error(courseId)
		console.error('2')

		this.course = (await this.courseService.getCourse(courseId)) as CourseModel;
	}

}
