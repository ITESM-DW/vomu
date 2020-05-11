import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { UserService } from 'src/app/user.service';
import { GenericCardModel } from 'src/app/modules/user/models/GenericCardModel';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	courseChangedSub: Subscription;
	courses: GenericCardModel[] = [];

	constructor(private courseService: CourseService, private userService: UserService) {
	}
	ngOnDestroy(): void {
		this.courseChangedSub.unsubscribe();
	}

	ngOnInit(): void {
		this.courseService.getAllCourses().forEach(course => {
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
		this.courseChangedSub = this.courseService.courseChanged.subscribe(courses => {
			console.log('Courses home subscription executed');
			this.courses = [];
			courses.forEach(course => {
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
		});
	}

}
