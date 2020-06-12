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

	async ngOnInit(): Promise<void> {
		if (this.authService.isAuth()) {
			this.user = await this.userService.getCurrentUser() as ProfessorModel;
			this.userService.userUpdated.subscribe(u => {
				this.user = u as ProfessorModel;
			});
			(await this.courseService.getCoursesByUserId(this.user._id)).forEach(course => {
				this.courses.push(
					new GenericCardModel(
						course.title,
						`${this.user.name} ${this.user.last}`,
						course.description, course.imgURL,
						`/course/${course._id}`,
						`/professor/course/${course._id}/edit`
					)
				);
			});
		} else {
			this.router.navigateByUrl('/');
		}
	}

}
