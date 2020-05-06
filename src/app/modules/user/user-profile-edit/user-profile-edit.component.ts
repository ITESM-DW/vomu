import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import { UserModel } from '../models/UserModel';

@Component({
	selector: 'app-user-profile-edit',
	templateUrl: './user-profile-edit.component.html',
	styleUrls: ['./user-profile-edit.component.scss'],
})
export class UserProfileEditComponent implements OnInit {
	@Input() user: UserModel;
	@Output() editionSave = new EventEmitter<number>();
	editBtn = 1;

	constructor(private userService: UserService) {}

	ngOnInit(): void {}

	disableEdition(): void {
		this.userService.updateUserInfo(this.user);
		this.editBtn = 0;
		this.editionSave.emit(this.editBtn);
	}
}
