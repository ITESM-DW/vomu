import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileDescriptionComponent } from './user-profile-description/user-profile-description.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { GenericCardComponent } from './card-view/generic-card/generic-card.component';
import { CardViewComponent } from './card-view/card-view.component';
import { StatsComponent } from './stats/stats.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
		UserProfileDescriptionComponent,
		UserProfileEditComponent,
		UserProfileComponent,
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
	]
})
export class SharedModule { }
