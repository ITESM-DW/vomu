import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { ProfessorModel } from 'src/app/modules/professor/models/ProfessorModel';
import { UserType } from 'src/app/modules/user/models/UserModel';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition, group, sequence, } from '@angular/animations';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],

	// Animations
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [	 // :enter is alias to 'void => *'
				style({ opacity: 0, height: 0 }),
				sequence([
					animate('0.5s', style({
						height: '500px'
					})),
					animate('0.5s', style({
						opacity: 1
					}))
				])
			]),
			transition(':leave', [	 // :leave is alias to '* => void'
				sequence([
					animate('0.5s', style({
						opacity: 0
					})),
					animate('0.5s', style({
						height: 0
					}))
				])
			])
		]),
	],
})
export class LoginComponent implements OnInit {
	register = false;
	now = 'login';
	loginRegister = 'Log In';
	changeOption = 'I don\'t have an account';

	role = 'none';
	deviceValue;

	constructor(
		private authService: AuthService,
		private userService: UserService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {
		this.now = this.route.snapshot.url[0].path;
		if (this.now === 'login') {
			this.register = false;
			this.loginRegister = 'Log In';
			this.changeOption = 'I don\'t have an account';
		} else if (this.now === 'signup') {
			this.register = true;
			this.loginRegister = 'Register';
			this.changeOption = 'I already have an account';
		}
		this.router.events.subscribe((val: NavigationEnd) => {
			if (val instanceof NavigationEnd) {
				if (val.url === '/login') {
					this.now = 'login';
					this.register = false;
					this.loginRegister = 'Log In';
					this.changeOption = 'I don\'t have an account';
				} else if (val.url === '/signup') {
					this.now = 'signup';
					this.register = true;
					this.loginRegister = 'Register';
					this.changeOption = 'I already have an account';
				}
			}
		});
	}
	async onSubmit(form: NgForm) {
		if (this.now === 'login') {
			if (!(await this.authService.login(form.value.email, form.value.password))) {
				alert('Error: Usuario o contraseña incorrectos.');
			} else {
				const user = await this.authService.getCurrentUserModel();
				if (user instanceof StudentModel) {
					this.router.navigateByUrl(`/student/profile`);
				} else if (user instanceof ProfessorModel) {
					this.router.navigateByUrl(`/professor/profile`);
				} else {
					alert('Error: Intenta de nuevo.');
				}
			}
		} else if (this.now === 'signup') {
			let user;
			console.log(form.value.type);
			if (form.value.type === 'Professor') {
				user = new ProfessorModel(
					form.value.email,
					form.value.name,
					form.value.last,
					form.value.pwd,
					form.value.title,
					form.value.description,
					form.value.imgURL,
					[]
				);
			} else if (form.value.type === 'Student') {
				user = new StudentModel(
					form.value.email,
					form.value.name,
					form.value.last,
					form.value.pwd,
					form.value.title,
					form.value.description,
					form.value.imgURL,
					[],
				);
			}
			this.userService.addUser(user);
			alert('El usuario ' + form.value.email + ' ha sido registrado!');
			this.router.navigateByUrl('/login');
		}
	}
	onFormChange() {
		if (this.now === 'login') {
			this.router.navigateByUrl('/signup');
		} else if (this.now === 'signup') {
			this.router.navigateByUrl('/login');
		}
	}
	choseProfessor() {
		this.role = 'professor';
	}
	choseStudent() {
		this.role = 'student';
	}
	onChange($event, deviceValue) {
		if (deviceValue === 'Student') { this.choseStudent(); } else if (deviceValue === 'Professor') { this.choseProfessor(); }
	}
}
