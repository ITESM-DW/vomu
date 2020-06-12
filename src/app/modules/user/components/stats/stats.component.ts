import { Component, OnInit, Renderer2 } from '@angular/core';
import { ChartModel } from '../../models/ChartModel';
import { AuthService } from 'src/app/auth.service';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
	chartIds: Array<string> = ['no_users', 'no_courses'];
	charts: ChartModel[] = [];

	constructor(private renderer: Renderer2, private authService: AuthService) {}

	async ngOnInit(): Promise<void> {
		this.charts = await this.authService.getGraphs();
	}

	onChartClick(event) {
		console.log(event);
	}
}
