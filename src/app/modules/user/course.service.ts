import { CourseModel } from '../professor/models/CourseModel';
import {Injectable} from '@angular/core';
import { StudentModel } from '../student/models/StudentModel';
import { UserService } from '../../user.service';
import { UserType } from './models/UserModel';

@Injectable ({
	providedIn: 'root'
})

export class CourseService {
	courses: CourseModel[] = [
		{
			id: 1,
			title: 'aliquet magna a neque. Nullam ut',
			description: 'nonummy. Fusce fermentum fermentum arcu. Vestibulum',
			imgURL: 'https://source.unsplash.com/1600x900/?work',
			subjects: [
				{
					id: 1,
					title: 'arcu et pede. Nunc sed',
					description: 'sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras',
					videoURL: 'Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien'
				},
				{
					id: 2,
					title: 'taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris',
					description: 'In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac',
					videoURL: 'https://youtu.be/fe3Vr8Pz-DM'
				}
			],
			students: [0, 4],
			professor: 1,
		},
		{
			id: 2,
			title: 'tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget',
			description: 'Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In',
			imgURL: 'https://source.unsplash.com/1600x900/?nature,water',
			subjects: [
			{
				id: 1,
				title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
				description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
				videoURL: 'https://youtu.be/ZusYJm5xHkg'
			},
			{
				id: 2,
				title: 'In condimentum. Donec at arcu.',
				description: 'vitae, aliquet nec, imperdiet nec, leo. Morbi neque',
				videoURL: 'https://youtu.be/r2vk4B5-8Bs'
			}
			],
			students: [4],
			professor: 2,
		},
		{
			id: 3,
			title: 'amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede,',
			description: 'arcu. Aliquam ultrices iaculis odio.',
			imgURL: 'https://source.unsplash.com/1600x900/?computer',
			subjects: [
				{
					id: 1,
					title: 'feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam',
					description: 'faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis',
					videoURL: 'https://youtu.be/IFe6ag34eMg'
				},
				{
					id: 2,
					title: 'sagittis semper. Nam tempor diam dictum sapien.',
					description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
					videoURL: 'https://youtu.be/vrpof_QQUe0'
				}
			],
			students: [7, 8],
			professor: 3,
		},
		{
			id: 4,
			title: 'tempor arcu. Vestibulum ut eros',
			description: 'Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra',
			imgURL: 'https://source.unsplash.com/1600x900/?bike',
			subjects: [
			{
				id: 1,
				title: 'sagittis semper. Nam tempor diam dictum sapien.',
				description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
				videoURL: 'https://youtu.be/vrpof_QQUe0'
			},
			{
				id: 2,
				title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
				description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
				videoURL: 'https://youtu.be/ZusYJm5xHkg'
			}
			],
			students: [9, 7],
			professor: 5,
		},
		{
			id: 5,
			title: 'non quam. Pellentesque habitant morbi',
			description: 'elit. Curabitur sed tortor. Integer aliquam adipiscing',
			imgURL: 'https://source.unsplash.com/1600x900/?face',
			subjects: [
			{
				id: 1,
				title: 'sagittis semper. Nam tempor diam dictum sapien.',
				description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
				videoURL: 'https://youtu.be/vrpof_QQUe0'
			},
			{
				id: 2,
				title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
				description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
				videoURL: 'https://youtu.be/ZusYJm5xHkg'
			},
			{
				id: 3,
				title: 'In condimentum. Donec at arcu.',
				description: 'vitae, aliquet nec, imperdiet nec, leo. Morbi neque',
				videoURL: 'https://youtu.be/r2vk4B5-8Bs'
			}
			],
			students: [0, 4, 7],
			professor: 6,
		}
	];

	constructor(private userService: UserService) {}

	addCourse(course: CourseModel) {
		this.courses.push(course);
	}

	getCourse(id: number) {
		const index = this.courses.findIndex(c => c.id === id);
		if (index > -1) {
			return this.courses[index];
		}
	}

	getCoursesByUserId(id: number) {
		// TODO Change iteration of student courses to student instead of all courses
		const user = this.userService.getUser(id);
		const userType = user.type;
		if (userType === UserType.STUDENT) {
			return this.courses.filter(course => course.students.indexOf(id) > -1);
		} else if (userType === UserType.PROFESSOR) {
			return this.courses.filter(course => course.professor === id);
		}
	}

	updateCourse(course: CourseModel): boolean {
		const index = this.courses.findIndex(c => c.id === course.id);
		if (index > -1) {
			this.courses[index] = course;
			return true;
		}
		return false;
	}

	deleteCourse(id: number): boolean {
		let found = false;
		this.courses = this.courses.filter(c => {
			if (c.id === id) {
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
