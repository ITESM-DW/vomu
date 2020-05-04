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
import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from './student/student.module';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CourseService } from './course.service';
import { ProfessorModule } from './professor/professor.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
	declarations: [
		AppComponent,
		CourseOutlineComponent,
		CourseCardsComponent,
		LoginComponent,
		NavBarComponent,
		RibbonComponent,
		FootbarComponent,
		HeaderComponent
	],
	imports: [BrowserModule, ProfessorModule, StudentModule, AdminModule, AppRoutingModule],
	providers: [UserService, AuthService, CourseService],
	bootstrap: [AppComponent],
})
export class AppModule {}
