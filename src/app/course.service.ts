import { CourseModel } from './models/CourseModel';
import {Injectable} from '@angular/core';

@Injectable ({
	providedIn: 'root'
})

export class CourseService {

	courses: CourseModel[] = [
		{
			"id": 1,
			"title": "aliquet magna a neque. Nullam ut",
			"description": "nonummy. Fusce fermentum fermentum arcu. Vestibulum",
			"subjects": [
				{
					"id": 1,
					"title": "arcu et pede. Nunc sed",
					"description": "sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras",
					"videoUrl": "Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien"
				},
				{
					"id": 2,
					"title": "taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris",
					"description": "In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac",
					"videoUrl": "https://youtu.be/fe3Vr8Pz-DM"
				}
			],
			"students": ["cursus.vestibulum.Mauris@idlibero.co.uk", "facilisis@laoreetlibero.edu"],
			"teacher": "risus@urnaVivamusmolestie.org",
		},
		{
			"id": 2,
			"title": "tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget",
			"description": "Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In",
			"subjects": [
			{
				"id": 1,
				"title": "eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas",
				"description": "enim mi tempor lorem, eget mollis lectus pede et risus.",
				"videoUrl": "https://youtu.be/ZusYJm5xHkg"
			},
			{
				"id": 2,
				"title": "In condimentum. Donec at arcu.",
				"description": "vitae, aliquet nec, imperdiet nec, leo. Morbi neque",
				"videoUrl": "https://youtu.be/r2vk4B5-8Bs"
			}
			],
			"students": ["facilisis@laoreetlibero.edu"],
			"teacher": "egestas.nunc@bibendum.org",
		},
		{
			"id": 3,
			"title": "amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede,",
			"description": "arcu. Aliquam ultrices iaculis odio.",
			"subjects": [
				{
					"id": 1,
					"title": "feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam",
					"description": "faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis",
					"videoUrl": "https://youtu.be/IFe6ag34eMg"
				},
				{
					"id": 2,
					"title": "sagittis semper. Nam tempor diam dictum sapien.",
					"description": "ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.",
					"videoUrl": "https://youtu.be/vrpof_QQUe0"
				}
			],
			"students": ["Cras.vehicula@velitAliquamnisl.edu","faucibus.leo@musAeneaneget.co.uk"],
			"teacher": "sapien.Nunc.pulvinar@estac.co.uk",
		},
		{
			"id": 4,
			"title": "tempor arcu. Vestibulum ut eros",
			"description": "Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra",
			"subjects": [
			{
				"id": 1,
				"title": "sagittis semper. Nam tempor diam dictum sapien.",
				"description": "ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.",
				"videoUrl": "https://youtu.be/vrpof_QQUe0"
			},
			{
				"id": 2,
				"title": "eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas",
				"description": "enim mi tempor lorem, eget mollis lectus pede et risus.",
				"videoUrl": "https://youtu.be/ZusYJm5xHkg"
			}
			],
			"students": ["Vivamus@blanditatnisi.co.uk","Cras.vehicula@velitAliquamnisl.edu"],
			"teacher": "malesuada@Praesenteunulla.edu",
		},
		{
			"id": 5,
			"title": "non quam. Pellentesque habitant morbi",
			"description": "elit. Curabitur sed tortor. Integer aliquam adipiscing",
			"subjects": [
			{
				"id": 1,
				"title": "sagittis semper. Nam tempor diam dictum sapien.",
				"description": "ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.",
				"videoUrl": "https://youtu.be/vrpof_QQUe0"
			},
			{
				"id": 2,
				"title": "eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas",
				"description": "enim mi tempor lorem, eget mollis lectus pede et risus.",
				"videoUrl": "https://youtu.be/ZusYJm5xHkg"
			},
			{
				"id": 3,
				"title": "In condimentum. Donec at arcu.",
				"description": "vitae, aliquet nec, imperdiet nec, leo. Morbi neque",
				"videoUrl": "https://youtu.be/r2vk4B5-8Bs"
			}
			],
			"students": ["cursus.vestibulum.Mauris@idlibero.co.uk", "facilisis@laoreetlibero.edu","Cras.vehicula@velitAliquamnisl.edu"],
			"teacher": "tincidunt@tellusPhasellus.net",
		}
	];

	getCourse(id: number) {
		const index = this.courses.findIndex(c => c.id === id);
		if(index > -1)
		{
			return this.courses[index];
		}
		return;
	}

	editCourse(course: CourseModel) {
		const index = this.courses.findIndex(c => c.id === course.id);
		this.courses[index] = course;
	}

	deleteCourse(id: number) {
		this.courses = this.courses.filter(c => c.id !== id);
	}

	getAllCourses() {
		return this.courses;
	}

	getCourseStudents(id: number) {
		return this.getCourse(id).students;
	}
}
