import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GenericCourseViewComponent } from './pages/generic-course-view/generic-course-view.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: LoginComponent },
	{ path: 'professor', loadChildren: () => import('./modules/professor/professor.module').then(mod => mod.ProfessorModule) },
	{ path: 'student', loadChildren: () => import('./modules/student/student.module').then(mod => mod.StudentModule) },
	{ path: 'course/:course_id', component: GenericCourseViewComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
