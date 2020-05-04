import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCourseComponent } from './create-course/create-course.component';
import { SubjectComponent } from './create-course/subject/subject.component';
import { SharedModule } from '../shared/shared.module';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';



@NgModule({
  declarations: [
    CreateCourseComponent,
    SubjectComponent,
    ProfessorDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProfessorDashboardComponent,
    CreateCourseComponent
  ]
})
export class ProfessorModule { }
