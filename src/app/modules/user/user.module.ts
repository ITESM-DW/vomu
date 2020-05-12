import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileDescriptionComponent } from './components/user-profile-description/user-profile-description.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CourseCardsComponent } from './components/course-cards/course-cards.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { StatsComponent } from './components/stats/stats.component';

import { ChartsModule } from 'ng2-charts';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		UserProfileDescriptionComponent,
		UserProfileComponent,
		CourseCardsComponent,
		GenericCardComponent,
		CardViewComponent,
		StatsComponent
	],
	imports: [
		CommonModule,
		ChartsModule,
		RouterModule,
		FormsModule
	],
	exports: [
		UserProfileDescriptionComponent,
		UserProfileComponent,
		GenericCardComponent,
		CardViewComponent,
		StatsComponent
	],
})
export class UserModule { }
