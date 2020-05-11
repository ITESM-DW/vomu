import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileDescriptionComponent } from './components/user-profile-description/user-profile-description.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CourseCardsComponent } from './components/course-cards/course-cards.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { StatsComponent } from './components/stats/stats.component';

import { ChartsModule } from 'ng2-charts';

import { AuthService } from '../../auth.service';
import { UserService } from '../../user.service';
import { CourseService } from '../../course.service';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		UserProfileDescriptionComponent,
		UserProfileEditComponent,
		UserProfileComponent,
		CourseCardsComponent,
		GenericCardComponent,
		CardViewComponent,
		StatsComponent
	],
	imports: [
		CommonModule,
		ChartsModule,
		RouterModule
	],
	exports: [
		UserProfileDescriptionComponent,
		UserProfileEditComponent,
		UserProfileComponent,
		GenericCardComponent,
		CardViewComponent,
		StatsComponent
	],
})
export class UserModule { }
