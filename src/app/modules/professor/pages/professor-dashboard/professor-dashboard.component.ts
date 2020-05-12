import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { ProfessorModel } from '../../models/ProfessorModel';
import { CourseService } from 'src/app/course.service';
import { GenericCardModel } from 'src/app/modules/user/models/GenericCardModel';

@Component({
	selector: 'app-professor-dashboard',
	templateUrl: './professor-dashboard.component.html',
	styleUrls: ['./professor-dashboard.component.scss']
})
export class ProfessorDashboardComponent implements OnInit {
	user: ProfessorModel;
	courses: GenericCardModel[] = [];

	constructor(private authService: AuthService, private userService: UserService, private courseService: CourseService, private router: Router) { }

	ngOnInit(): void {
		if (this.authService.isAuth()) {
			this.user = this.userService.getUser(this.authService.getCurrentUser()) as ProfessorModel;
			this.userService.userUpdated.subscribe(u => {
				this.user = u as ProfessorModel;
			})
			this.courseService.getCoursesByUserId(this.user.id).forEach(course => {
				this.courses.push(
					new GenericCardModel(
						course.title,
						`${this.user.name} ${this.user.last}`,
						course.description, course.imgURL,
						`/course/${course.id}`,
						`/professor/course/${course.id}/edit`
					)
				);
			});
		} else {
			this.router.navigateByUrl('/');
		}
	}

}
