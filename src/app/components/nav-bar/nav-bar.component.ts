import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
	authChangedSub: Subscription;
	loggedin: boolean;
	type: string;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.loggedin = this.authService.isAuth();
		this.authChangedSub = this.authService.authChanged.subscribe(status => {
			this.loggedin = status;
			this.type = this.authService.getCurrentUserModel() instanceof StudentModel ? 'student' : 'professor';
		});
	}

	ngOnDestroy(): void {
		this.authChangedSub.unsubscribe();
	}

	onLogOut() {
		this.authService.logout();
	}

}
