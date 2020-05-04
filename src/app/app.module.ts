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
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { SubjectComponent } from './components/create-course/subject/subject.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { StudentModule } from './student/student.module';
import { SharedModule } from './shared/shared.module';

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
		CreateCourseComponent,
		SubjectComponent,
	],
	imports: [BrowserModule, AppRoutingModule, SharedModule, StudentModule],
	providers: [UserService],
	bootstrap: [AppComponent],
})
export class AppModule {}
