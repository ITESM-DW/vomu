import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
	selector: 'app-course-view-video',
	templateUrl: './course-view-video.component.html',
	styleUrls: ['./course-view-video.component.scss'],
})
export class CourseViewVideoComponent implements OnInit {
	@Input() id: string;

	player: YT.Player;

	constructor(private sanitizer: DomSanitizer) { }


	ngOnInit(): void {
	}

	savePlayer(player) {
		this.player = player;
	}
	onStateChange(event) {
	}
}
