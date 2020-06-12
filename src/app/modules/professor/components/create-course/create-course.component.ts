import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CourseModel } from '../../models/CourseModel';
import { CourseService } from 'src/app/course.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { SubjectModel } from '../../models/SubjectModel';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';
@Component({
	selector: 'app-create-course',
	templateUrl: './create-course.component.html',
	styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
	@Input() course: CourseModel;
	courseForm: FormGroup;
	subjects: FormArray;

	constructor(private courseService: CourseService, private authService: AuthService, private router: Router) { }

	async ngOnInit(): Promise<void> {
		if (await this.authService.isAuth()) {
			this.courseForm = new FormGroup({
				title: new FormControl(null),
				description: new FormControl(null),
				imgURL: new FormControl(null),
				subjects: new FormArray([])
			});

			this.subjects = this.courseForm.get('subjects') as FormArray;
		} else {
			this.router.navigateByUrl('/');
		}
	}

	async onSubmit() {
		const subjectModels = [];
		this.courseForm.value.subjects.forEach((s, i) => {
			subjectModels.push(new SubjectModel(i, s.title, s.description, s.videoURL));
		});
		const values = this.courseForm.value;
				console.error('3')
		const course = new CourseModel(
			values.title,
			values.description,
			values.imgURL,
			subjectModels,
			[],
			(await this.authService.getCurrentUserModel() as StudentModel)._id,
		);
		this.courseService.addCourse(course);
	}

	addSubject() {
		const subject = new FormGroup({
			title: new FormControl(null),
			description: new FormControl(null),
			videoURL: new FormControl(null)
		});
		this.subjects.push(subject);
	}

	deleteSubject(index: number) {
		this.subjects.removeAt(index);
	}
}
