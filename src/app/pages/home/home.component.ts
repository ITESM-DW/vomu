import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/modules/user/course.service';
import { UserService } from 'src/app/user.service';
import { GenericCardModel } from 'src/app/modules/user/models/GenericCardModel';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	courses: GenericCardModel[] = [];

	constructor(private courseService: CourseService, private userService: UserService) { }

	ngOnInit(): void {
		this.courseService.getAllCourses().slice(0, 4).forEach(course => {
			const professor = this.userService.getUser(course.professor);
			this.courses.push(
				new GenericCardModel(
					course.title,
					`${professor.name} ${professor.last}`,
					course.description,
					course.imgURL,
					`/course/${course.id}`,
				)
			);
		});
	}

}
