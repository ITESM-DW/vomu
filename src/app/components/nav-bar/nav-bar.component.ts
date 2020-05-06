import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
	constructor() {}
	loggedin = true;

	ngOnInit(): void {}

	onLogOut() {
		this.loggedin = false;
	}
}
