import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'professor', loadChildren: './professor/professor.module#ProfessorModule' },
	{ path: 'student', loadChildren: './student/student.module#StudentModule' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
