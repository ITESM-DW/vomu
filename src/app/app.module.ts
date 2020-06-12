import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';

import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { StudentModule } from './modules/student/student.module';
import { ProfessorModule } from './modules/professor/professor.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { GenericCourseViewComponent } from './pages/generic-course-view/generic-course-view.component';
import { GeneralCourseViewComponent } from './components/general-course-view/general-course-view.component';
import { CourseService } from './course.service';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		NavBarComponent,
		RibbonComponent,
		FootbarComponent,
		HeaderComponent,
		HomeComponent,
		GeneralCourseViewComponent,
		GenericCourseViewComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		UserModule,
		ProfessorModule,
		StudentModule,
		AdminModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		
	],
	bootstrap: [AppComponent],
	providers: [AuthService, UserService, CourseService]
})
export class AppModule {}
