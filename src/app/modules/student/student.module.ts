import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { StudentRoutingModule } from './student-routing.module';
import { CourseViewVideoComponent } from './components/course-view-video/course-view-video.component';
import { StudentCourseViewComponent } from './pages/student-course-view/student-course-view.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { CourseViewDetailsComponent } from './components/course-view-details/course-view-details.component';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		CourseViewDetailsComponent,
		CourseViewVideoComponent,
		StudentCourseViewComponent,
		StudentProfileComponent
	],
	imports: [
		CommonModule,
		UserModule,
		FormsModule,
		StudentRoutingModule
	],
	exports: [
		StudentCourseViewComponent,
		StudentProfileComponent
	],
	providers: [
		StudentService
	]
})
export class StudentModule { }
