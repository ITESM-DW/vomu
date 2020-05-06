import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileDescriptionComponent } from './components/user-profile-description/user-profile-description.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CourseOutlineComponent } from './components/course-outline/course-outline.component';
import { CourseCardsComponent } from './components/course-cards/course-cards.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { StatsComponent } from './components/stats/stats.component';

import { ChartsModule } from 'ng2-charts';

import { AuthService } from './auth.service';
import { UserService } from './user.service';


@NgModule({
	declarations: [
		UserProfileDescriptionComponent,
		UserProfileEditComponent,
		UserProfileComponent,
		CourseOutlineComponent,
		CourseCardsComponent,
		GenericCardComponent,
		CardViewComponent,
		StatsComponent
	],
	imports: [
		CommonModule,
		ChartsModule
	],
	exports: [
		UserProfileDescriptionComponent,
		UserProfileEditComponent,
		UserProfileComponent,
		GenericCardComponent,
		CardViewComponent,
		StatsComponent
	],
	providers: [
		AuthService,
		UserService
	]
})
export class UserModule { }
