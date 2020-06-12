import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { UserService } from 'src/app/user.service';
import { GenericCardModel } from 'src/app/modules/user/models/GenericCardModel';
import { Subscription } from 'rxjs';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';
import { async } from '@angular/core/testing';
import { AuthService } from 'src/app/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	courseChangedSub: Subscription;
	courses: GenericCardModel[] = [];

	constructor(private courseService: CourseService, private userService: UserService, private authService: AuthService) {
	}
	ngOnDestroy(): void {
		this.courseChangedSub.unsubscribe();
	}

	async ngOnInit(): Promise<void> {
		this.authService.isAuth();
		const allCourses = await this.courseService.getAllCourses();
		allCourses.forEach(async course => {
			const professor = (await this.userService.getUser(course.professor) as ProfessorModel);
			this.courses.push(
				new GenericCardModel(
					course.title,
					`${professor.name} ${professor.last}`,
					course.description,
					course.imgURL,
					`/course/${course._id}`,
				)
			);
		});
		this.courseChangedSub = this.courseService.courseChanged.subscribe(courses => {
			console.log('Courses home subscription executed');
			this.courses = [];
			courses.forEach(async course => {
				const professor = (await this.userService.getUser(course.professor) as ProfessorModel);
				this.courses.push(
					new GenericCardModel(
						course.title,
						`${professor.name} ${professor.last}`,
						course.description,
						course.imgURL,
						`/course/${course._id}`,
					)
				);
			});
		});
	}

}
