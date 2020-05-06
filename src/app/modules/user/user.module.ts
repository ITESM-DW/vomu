import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view/card-view.component';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileDescriptionComponent } from './user-profile-description/user-profile-description.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { StatsComponent } from './stats/stats.component';
import { ChartsModule } from 'ng2-charts';
import { AuthService } from './auth.service';
import { UserService } from './user.service';


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
	],
	providers: [
		AuthService,
		UserService
	]
})
export class UserModule { }
