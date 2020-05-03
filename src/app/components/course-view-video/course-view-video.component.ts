import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-course-view-video',
	templateUrl: './course-view-video.component.html',
	styleUrls: ['./course-view-video.component.scss'],
})
export class CourseViewVideoComponent implements OnInit {
	@Input() videoLink: SafeResourceUrl;

	constructor(private sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(
			'https://www.youtube.com/embed/zpOULjyy-n8?rel=0'
		);
	}
}
