import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	register = false;
	loginRegister = 'Log In';
	changeOption = 'I don\'t have an account';
	now = 'login';

	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.now = this.route.snapshot.url[0].path;
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
	onChangeOption() {
		if (this.now === 'login') {
			this.now = 'signup';
		} else {
			this.now = 'login';
		}
	}
}
