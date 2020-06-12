import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { ProfessorRoutingModule } from './professor-routing.module';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { ProfessorDashboardComponent } from './pages/professor-dashboard/professor-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
	declarations: [
	CreateCourseComponent,
	ProfessorDashboardComponent
	],
	imports: [
		CommonModule,
		UserModule,
		ReactiveFormsModule,
		ProfessorRoutingModule,
		NgxPaginationModule,
	],
	exports: [
		ProfessorDashboardComponent,
		CreateCourseComponent
	]
})
export class ProfessorModule { }
