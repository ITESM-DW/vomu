import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { ProfessorRoutingModule } from './professor-routing.module';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ProfessorDashboardComponent } from './pages/professor-dashboard/professor-dashboard.component';
import { CourseService } from './course.service';
import { ProfessorService } from './professor.service';


@NgModule({
	declarations: [
	CreateCourseComponent,
	SubjectComponent,
	ProfessorDashboardComponent
	],
	imports: [
		CommonModule,
		UserModule,
		ProfessorRoutingModule
	],
	exports: [
		ProfessorDashboardComponent,
		CreateCourseComponent
	],
	providers: [
		ProfessorService,
		CourseService
	]
})
export class ProfessorModule { }
