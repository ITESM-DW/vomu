import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {

	constructor(private authService: AuthService) {}
	authChangedSub: Subscription;
	loggedin: boolean;

	ngOnInit(): void {
		this.loggedin = this.authService.isAuth();
		this.authChangedSub = this.authService.authChanged.subscribe(status => {
			this.loggedin = status;
		});
	}

	ngOnDestroy(): void {
		this.authChangedSub.unsubscribe();
	}

	onLogOut() {
		this.authService.logout();
	}

}
