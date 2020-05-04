import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from 'src/app/models/CourseModel';
import { CourseService } from 'src/app/course.service';

@Component({
	selector: 'app-course-view-details',
	templateUrl: './course-view-details.component.html',
	styleUrls: ['./course-view-details.component.scss'],
})
export class CourseViewDetailsComponent implements OnInit {
	@Input() course: CourseModel;

	constructor(private courseService: CourseService) {}

	ngOnInit(): void {
		// TODO(kevinwkt): take this hardcode out.
		// this.course = {
		// 	title: 'Subject',
		// 	description:
		// 		'Quis ea incididunt anim ex. Nostrud dolore aliqua eiusmod amet commodo mollit minim sunt ex. Veniam sit et aute ut adipisicing duis ut elit fugiat magna esse eu est veniam. Eu sint occaecat eiusmod aute magna nisi et. Esse minim esse cupidatat sunt elit irure tempor. Ut velit deserunt laborum in ipsum dolor do. Amet voluptate nulla laborum eu culpa ipsum dolor do sint labore do. Magna qui veniam consequat incididunt reprehenderit laboris.',
		// 	subjects: []
		// };

		this.course = this.courseService.getCourse();
	}
}
