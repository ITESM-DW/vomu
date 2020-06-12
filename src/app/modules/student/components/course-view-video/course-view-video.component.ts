import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
	selector: 'app-course-view-video',
	templateUrl: './course-view-video.component.html',
	styleUrls: ['./course-view-video.component.scss'],
})
export class CourseViewVideoComponent implements OnInit {
	@Input() videoLink = 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0';

	player: YT.Player;
	id = 'Sv6dMFF_yts';

	constructor(private sanitizer: DomSanitizer) { }


	ngOnInit(): void {
	}

	savePlayer(player) {
		this.player = player;
		console.log('player instance', player);
	}
	onStateChange(event) {
		console.log('player state', event.data);
	}
}
