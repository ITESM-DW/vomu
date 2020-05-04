import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentCourseViewComponent } from './student-course-view/student-course-view.component';

const routes: Routes = [
	{ path: 'profile', component: StudentProfileComponent },
	{ path: 'course/:id', component: StudentCourseViewComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StudentRoutingModule { }
