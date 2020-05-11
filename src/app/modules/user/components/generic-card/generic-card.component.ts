import { Component, OnInit, Input } from '@angular/core';
import { GenericCardModel } from '../../models/GenericCardModel';
import { UserType } from '../../models/UserModel';
import { CourseService } from '../../../../course.service';
import { AuthService } from 'src/app/auth.service';

@Component({
	selector: 'app-generic-card',
	templateUrl: './generic-card.component.html',
	styleUrls: ['./generic-card.component.scss'],
})
export class GenericCardComponent implements OnInit {
	@Input() cardDetail: GenericCardModel;
	type: any;
	userTypes = UserType;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		// if (this.authService.isAuth()) {
		// 	this.type = this.authService.getCurrentUserType();
		// } // TODO Implement card view for student/professor + authenticated or not
	}

	getObjectKeys(obj) {
		console.error(Object.keys(obj));
		return Object.keys(obj);
	}
}
