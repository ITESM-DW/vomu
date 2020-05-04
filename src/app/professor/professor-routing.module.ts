import { NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { CreateCourseComponent } from './create-course/create-course.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';

const routes: Routes =[
        { path: 'create', component:CreateCourseComponent},
        { path: 'profile', component: ProfessorDashboardComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProfessorRoutingModule { }