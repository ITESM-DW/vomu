import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseOutlineComponent } from './components/course-outline/course-outline.component';
import { CourseCardsComponent } from './components/course-cards/course-cards.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseViewVideoComponent } from './components/course-view-video/course-view-video.component';
import { CourseViewDetailsComponent } from './components/course-view-details/course-view-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfessorModule } from './professor/professor.module';

@NgModule({
	declarations: [
		AppComponent,
		CourseOutlineComponent,
		CourseCardsComponent,
		LoginComponent,
		NavBarComponent,
		RibbonComponent,
		FootbarComponent,
		HeaderComponent,
		CourseViewVideoComponent,
		CourseViewDetailsComponent,
	],
	imports: [BrowserModule, AppRoutingModule, ProfessorModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
