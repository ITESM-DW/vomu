import { Component, OnInit, Input } from '@angular/core';


import { UserService } from 'src/app/modules/user/user.service';
import { AuthService } from 'src/app/modules/user/auth.service';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
	editBtn = 0;
	@Input() user: StudentModel | ProfessorModel;

	constructor(private userService: UserService, private authService: AuthService) { }

	ngOnInit(): void {
		if (this.authService.isAuth()) {
			this.user = this.userService.getUserInfo('cursus.vestibulum.Mauris@idlibero.co.uk'); // TODO Get id with routing
		}
	}
	enableEdition($event) {
		this.editBtn = $event;
	}

	disableEdition($event) {
		this.editBtn = $event;
	}
}
