import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfessorRoutingModule } from './professor-routing.module';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ProfessorDashboardComponent } from './pages/professor-dashboard/professor-dashboard.component';


@NgModule({
	declarations: [
	CreateCourseComponent,
	SubjectComponent,
	ProfessorDashboardComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		ProfessorRoutingModule
	],
	exports: [
		ProfessorDashboardComponent,
		CreateCourseComponent
	]
})
export class ProfessorModule { }
