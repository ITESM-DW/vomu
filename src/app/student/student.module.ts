import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseViewVideoComponent } from './student-course-view/course-view-video/course-view-video.component';
import { StudentCourseViewComponent } from './student-course-view/student-course-view.component';
import { CourseViewDetailsComponent } from './student-course-view/course-view-details/course-view-details.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		CourseViewDetailsComponent,
		CourseViewVideoComponent,
		StudentCourseViewComponent,
		StudentProfileComponent
	],
	imports: [
		CommonModule,
		SharedModule
	],
	exports: [
		StudentCourseViewComponent,
		StudentProfileComponent
	]
})
export class StudentModule { }
