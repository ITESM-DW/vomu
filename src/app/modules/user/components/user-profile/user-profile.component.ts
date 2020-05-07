import { Component, OnInit, Input } from '@angular/core';


import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
	edit = false;
	@Input() user: StudentModel | ProfessorModel;

	constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}
	onEdit() {
		this.edit = true;
	}

	onSave() {
		this.edit = false;
	}
}
