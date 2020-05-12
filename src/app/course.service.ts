import { CourseModel } from './modules/professor/models/CourseModel';
import {Injectable} from '@angular/core';
import { UserService } from './user.service';
import { SubjectModel } from './modules/professor/models/SubjectModel';
import { Subject } from 'rxjs';
import { StudentModel } from './modules/student/models/StudentModel';
import { ProfessorModel } from './modules/professor/models/ProfessorModel';
import { AuthService } from './auth.service';

@Injectable ({
	providedIn: 'root'
})

export class CourseService {
	courseChanged = new Subject<CourseModel[]>(); // TODO One for update/delete, another for adding
	courses: CourseModel[] = [
		new CourseModel(
			1,
			'aliquet magna a neque. Nullam ut',
			'nonummy. Fusce fermentum fermentum arcu. Vestibulum',
			'https://source.unsplash.com/1600x900/?work',
			[
				new SubjectModel(
					1,
					'arcu et pede. Nunc sed',
					'sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras',
					'Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien'
				),
				new SubjectModel(
					2,
					'taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris',
					'In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac',
					'https://youtu.be/fe3Vr8Pz-DM'
				)
			],
			[0, 4],
			1
		),
		new CourseModel(
			2,
			'tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget',
			'Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In',
			'https://source.unsplash.com/1600x900/?nature,water',
			[
			new SubjectModel(
				1,
				'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
				'enim mi tempor lorem, eget mollis lectus pede et risus.',
				'https://youtu.be/ZusYJm5xHkg'
			),
			new SubjectModel (
				2,
				'In condimentum. Donec at arcu.',
				'vitae, aliquet nec, imperdiet nec, leo. Morbi neque',
				'https://youtu.be/r2vk4B5-8Bs'
			)
			],
			[4],
			2
		),
		new CourseModel(
			3,
			'amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede,',
			'arcu. Aliquam ultrices iaculis odio.',
			'https://source.unsplash.com/1600x900/?computer',
			[
				new SubjectModel(
					1,
					'feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam',
					'faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis',
					'https://youtu.be/IFe6ag34eMg'
				),
				new SubjectModel (
					2,
					'sagittis semper. Nam tempor diam dictum sapien.',
					'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
					'https://youtu.be/vrpof_QQUe0'
				)
			],
			[7, 8],
			3,
		),
		new CourseModel(
			4,
			'tempor arcu. Vestibulum ut eros',
			'Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra',
			'https://source.unsplash.com/1600x900/?bike',
			[
				new SubjectModel (
				1,
				'sagittis semper. Nam tempor diam dictum sapien.',
				'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
				'https://youtu.be/vrpof_QQUe0'
			),
				new SubjectModel (
				2,
				'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
				'enim mi tempor lorem, eget mollis lectus pede et risus.',
				'https://youtu.be/ZusYJm5xHkg'
			)
			],
			[9, 7],
			5,
		),
		new CourseModel(
			5,
			'non quam. Pellentesque habitant morbi',
			'elit. Curabitur sed tortor. Integer aliquam adipiscing',
			'https://source.unsplash.com/1600x900/?face',
			[
				new SubjectModel (
				1,
				'sagittis semper. Nam tempor diam dictum sapien.',
				'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
				'https://youtu.be/vrpof_QQUe0'
			),
				new SubjectModel (
				2,
				'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
				'enim mi tempor lorem, eget mollis lectus pede et risus.',
				'https://youtu.be/ZusYJm5xHkg'
			),
				new SubjectModel (
				3,
				'In condimentum. Donec at arcu.',
				'vitae, aliquet nec, imperdiet nec, leo. Morbi neque',
				'https://youtu.be/r2vk4B5-8Bs'
			)
			],
			[0, 4, 7],
			6,
		)
	];

	constructor(private userService: UserService, private authService: AuthService) {}

	addCourse(course: CourseModel) {
		this.courses.push(course);
		this.courseChanged.next(this.courses);
	}

	getCourse(id: number) {
		const index = this.courses.findIndex(c => c.id === id);
		if (index > -1) {
			return this.courses[index];
		}
	}

	getCoursesByUserId(id: number) {
		// TODO Change iteration of student courses to student instead of all courses
		const userModel = this.authService.getCurrentUserModel();
		if (userModel instanceof StudentModel) {
			return this.courses.filter(course => course.students.indexOf(id) > -1);
		} else if (userModel instanceof ProfessorModel) {
			return this.courses.filter(course => course.professor === id);
		}
	}

	updateCourse(course: CourseModel): boolean {
		const index = this.courses.findIndex(c => c.id === course.id);
		if (index > -1) {
			this.courses[index] = course;
			this.courseChanged.next(this.courses);
			return true;
		}
		return false;
	}

	deleteCourse(id: number): boolean {
		let found = false;
		this.courses = this.courses.filter(c => {
			if (c.id === id) {
				this.courseChanged.next(this.courses);
				found = true;
			}
			return c.id !== id;
		});

		return found;

	}

	getAllCourses(): CourseModel[] {
		return this.courses;
	}

	getCourseStudents(id: number): number[] {
		const course = this.getCourse(id);
		if (course !== undefined) {
			return course.students;
		}
	}
}
