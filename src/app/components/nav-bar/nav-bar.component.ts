import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
import { async } from 'rxjs/internal/scheduler/async';

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

	async ngOnInit(): Promise<void> {
		this.loggedin = this.authService.isAuth();
		this.authChangedSub = await this.authService.authChanged.subscribe(async status => {
			this.loggedin = status;
			console.error('when you were here before')
				console.error('2')
			const currentUser = await this.authService.getCurrentUserModel();
			this.type = currentUser instanceof StudentModel ? 'student' : 'professor';
		});
	}

	ngOnDestroy(): void {
		this.authChangedSub.unsubscribe();
	}

	onLogOut() {
		this.authService.logout();
	}

}
