import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { ProfessorModel } from '../../models/ProfessorModel';
import { CourseModel } from 'src/app/modules/professor/models/CourseModel';
import { CourseService } from 'src/app/modules/user/course.service';
import { GenericCardModel } from 'src/app/modules/user/models/GenericCardModel';

@Component({
	selector: 'app-professor-dashboard',
	templateUrl: './professor-dashboard.component.html',
	styleUrls: ['./professor-dashboard.component.scss']
})
export class ProfessorDashboardComponent implements OnInit {
	user: ProfessorModel;

	constructor(private authService: AuthService, private userService: UserService, private courseService: CourseService, private router: Router) { }

	ngOnInit(): void {
		if (this.authService.isAuth()) {
				this.user = this.userService.getUser(this.authService.getCurrentUser()) as ProfessorModel;
		}
	}

}
