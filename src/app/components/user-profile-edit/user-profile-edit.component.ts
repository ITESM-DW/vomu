import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-user-profile-edit',
	templateUrl: './user-profile-edit.component.html',
	styleUrls: ['./user-profile-edit.component.scss'],
})
export class UserProfileEditComponent implements OnInit {
	@Output() editionSave = new EventEmitter<number>();
	editBtn = 1;

	constructor() {}

	ngOnInit(): void {}

	disableEdition(): void {
		this.editBtn = 0;
		this.editionSave.emit(this.editBtn);
	}
}
