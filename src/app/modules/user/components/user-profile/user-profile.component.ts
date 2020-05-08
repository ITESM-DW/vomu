import { Component, OnInit, Input } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	group,
	sequence,
	// ...
} from '@angular/animations';

import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],

	//Animations
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [	 // :enter is alias to 'void => *'
					style({opacity:0}),
			        animate('0.5s 0.5s', style({
			          opacity:1,
			          transform: 'translateX(0%)',
			        }))
			]),
			transition(':leave', [	 // :leave is alias to '* => void'
					style({opacity:1}),
			        animate('0.5s', style({
			          opacity:0,
			          transform: 'translateX(-100%)',
			        }))
			])
		]),
	],
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