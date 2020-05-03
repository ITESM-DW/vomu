import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// External modules.
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileDescriptionComponent } from './components/user-profile-description/user-profile-description.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { HeaderComponent } from './components/header/header.component';

import { CourseViewVideoComponent } from './components/course-view-video/course-view-video.component';
import { CourseViewDetailsComponent } from './components/course-view-details/course-view-details.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { CardViewComponent } from './components/card-view/card-view.component';

import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    UserProfileDescriptionComponent,
    UserProfileEditComponent,
    NavBarComponent,
    RibbonComponent,
    FootbarComponent,
    HeaderComponent,
    CourseViewVideoComponent,
    CourseViewDetailsComponent,
    GenericCardComponent,
    CardViewComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
