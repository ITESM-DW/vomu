import { Component, OnInit, Input } from '@angular/core';

import { UserModel } from '../../models/UserModel';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
	editBtn = 0;

	@Input() user: UserModel;

	constructor(private userService: UserService, private authService: AuthService) {}

	ngOnInit(): void {
		// TODO(kevinwkt): undo hardcode for now.
		if (this.authService.isAuth()) {
			this.user = this.userService.getUserInfo(); // TODO Get id with routing
		}
	}

	enableEdition($event) {
		this.editBtn = $event;
	}

	disableEdition($event) {
		this.editBtn = $event;
	}
}
