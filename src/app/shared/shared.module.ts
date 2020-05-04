import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view/card-view.component';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileDescriptionComponent } from './user-profile-description/user-profile-description.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { StatsComponent } from './stats/stats.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    CardViewComponent,
    GenericCardComponent,
    UserProfileComponent,
    UserProfileDescriptionComponent,
    UserProfileEditComponent,
    StatsComponent

  ],
  imports: [
    CommonModule, ChartsModule
  ],
  exports:[
    CardViewComponent,
    GenericCardComponent,
    UserProfileComponent,
    UserProfileDescriptionComponent,
    UserProfileEditComponent,
    StatsComponent
  ]
})
export class SharedModule { }
