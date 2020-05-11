import { trigger, transition, style, query, animateChild, group, animate, sequence, } from '@angular/animations';

export const routeTransitionAnimations = trigger('slidePage', [
	transition('* => Home, StudentProfile => StudentCourse, Home<=>StudentProfile, ProfessorDashboard => CreateCourse', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild(), { optional: true }),
		group([
			query(':leave', [animate('0.5s', style({ right: '100%', opacity: 0 }))], { optional: true }),
			query(':enter', [animate('0.5s', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('StudentCourse => StudentProfile,CreateCourse => ProfessorDashboard', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild(), { optional: true }),
		group([
			query(':leave', [animate('0.5s ease-out', style({ left: '100%', opacity: 0 }))], { optional: true }),
			query(':enter', [animate('0.5s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);
