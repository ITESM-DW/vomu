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
import { StudentModule } from './modules/student/student.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { CourseService } from './services/course.service';
import { AdminModule } from './modules/admin/admin.module';
import { ProfessorModule } from './modules/professor/professor.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

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
		HomeComponent,
	],
	imports: [
		BrowserModule,
		SharedModule,
		ProfessorModule,
		StudentModule,
		AdminModule,
		AppRoutingModule,
	],
	providers: [UserService, AuthService, CourseService],
	bootstrap: [AppComponent],
})
export class AppModule {}
