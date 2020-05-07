import { Component, OnInit } from '@angular/core';
import { SubjectModel } from '../../models/SubjectModel';

@Component({
	selector: 'app-create-course',
	templateUrl: './create-course.component.html',
	styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
	subjects: SubjectModel[] = [
		{
			id: 0,
			title: 'Officia pariatur adipisicing est nisi elit eiusmod.',
			description: `Laboris est ad mollit id. Qui labore aute veniam labore reprehenderit 
				laborum ullamco. Adipisicing nisi in ipsum commodo sint laborum pariatur ad consectetur.`,
			videoURL: 'url'
		}
	];
	constructor() { }

	ngOnInit(): void {
	}

	addSubject() {
		this.subjects.push({
			id: this.subjects.length,
			title: '',
			description: '',
			videoURL: ''
		});
	}
}
