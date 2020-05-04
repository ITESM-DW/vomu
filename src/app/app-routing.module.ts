import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'professor', loadChildren: './professor/professor.module#ProfessorModule'},
	{ path: 'student', loadChildren: './student/student.module#StudentModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
