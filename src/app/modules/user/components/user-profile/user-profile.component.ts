import { Component, OnInit, Input } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition, group, sequence, query, stagger } from '@angular/animations';

import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
	//Animations
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [
					style({opacity:0}),
					animate('0.3s 0.3s', style({
						opacity:1,
						position: '*'
					}))
			]),
			transition(':leave', [
					style({opacity:1, position: '*'}),
					animate('0.3s', style({
						opacity:0,
					}))
			])
		]),
	],
})


export class UserProfileComponent implements OnInit {
	edit = false;
	@Input() user: (StudentModel | ProfessorModel);

	constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	onEdit() {
		this.edit = true;
	}

	onSave(form: NgForm) {
		this.edit = false;
		console.log(form.value);
		const currentUser = this.authService.getCurrentUserModel();

		currentUser.name = form.value.name;
		currentUser.last = form.value.last;
		currentUser.title = form.value.title;
		currentUser.description = form.value.description;
		currentUser.image = form.value.imgURL;

		this.userService.updateUser(currentUser);
	}
}
