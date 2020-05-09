import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { ProfessorDashboardComponent } from './pages/professor-dashboard/professor-dashboard.component';

const routes: Routes = [
	{ path: 'create', component: CreateCourseComponent, data: { animationState: 'CreateCourse' }},
	{ path: 'profile', component: ProfessorDashboardComponent, data: { animationState: 'ProfessorDashboard' }}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProfessorRoutingModule { }