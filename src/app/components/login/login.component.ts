import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	register = false;
	loginRegister = 'Log In';
	changeOption = "I don't have an account";

	role:string = "none";

	constructor() {}

	ngOnInit(): void {}

	changeRegister() {
		if (this.register === true) {
			this.register = false;
			this.loginRegister = 'Log In';
			this.changeOption = "I don't have an account";
		} else {
			this.register = true;
			this.loginRegister = 'Register';
			this.changeOption = 'I already have an account';
		}
		console.log('Variable changed');
	}

	choseProfessor(){
		this.role = "teacher";
		console.log("chose teacher");
	}
	choseStudent(){
		this.role = "student";
		console.log("chose st");
	}
}
