import { Component, OnInit, Renderer2 } from '@angular/core';
import { ChartModel } from '../models/ChartModel';



@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
	chartIds: Array<string> = ['no_users', 'no_courses'];
	charts: ChartModel[] = [
		{
			title: '# of Users (Cumulative)',
			type: 'line',
			datasets: [
				{
					data: [100, 130, 145, 150, 163, 169, 180, 220, 247, 290, 300, 315],
					label: 'Students',
				},
				{
					data: [5, 8, 14, 16, 16, 18, 20, 26, 25, 27, 30, 33],
					label: 'Professor',
				},
			],
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			legend: true,
			options: {
				responsive: true,
			},
		},
		{
			title: '# of Professors (Cumulative)',
			type: 'line',
			datasets: [
				{ data: [330, 600, 260, 700], label: 'Account A' },
				{ data: [120, 455, 100, 340], label: 'Account B' },
				{ data: [45, 67, 800, 500], label: 'Account C' },
			],
			labels: ['January', 'February', 'Mars', 'April'],
			legend: true,
			options: {
				responsive: true,
			},
		},
		{
			title: 'Signups per Month',
			type: 'bar',
			datasets: [
				{
					data: [100, 30, 15, 5, 13, 6, 11, 40, 27, 43, 10, 15],
					label: 'Student Signups',
				},
				{
					data: [5, 3, 6, 2, 0, 2, 2, 6, -1, 2, 3, 3],
					label: 'Professor Signups',
				},
			],
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			legend: true,
			options: {
				responsive: true,
			},
		},
		{
			title: 'Overall Course Contents',
			type: 'pie',
			data: [40, 23, 7],
			labels: ['Technology', 'Self Improvement', 'History'],
			legend: true,
			plugins: [],
			options: {
				responsive: true,
			},
		},
		{
			title: 'User Details',
			type: 'doughnut',
			data: [
				[315, 33],
				[33, 315],
			],
			labels: ['Student', 'Teacher'],
		},
	];

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {}

	onChartClick(event) {
		console.log(event);
	}
}
