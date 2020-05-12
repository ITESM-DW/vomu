import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { CourseModel } from 'src/app/modules/professor/models/CourseModel';

@Component({
	selector: 'app-course-view-details',
	templateUrl: './course-view-details.component.html',
	styleUrls: ['./course-view-details.component.scss'],
})
export class CourseViewDetailsComponent implements OnInit {
	@Input() subject: CourseModel;

	constructor(private courseService: CourseService) {}

	ngOnInit(): void {
	}
}
