import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CourseModel } from '../../models/CourseModel';
import { CourseService } from 'src/app/course.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { SubjectModel } from '../../models/SubjectModel';
import { StudentModel } from 'src/app/modules/student/models/StudentModel';

interface Video {
	id: String;
	name: String;
	image: String;
}

@Component({
	selector: 'app-create-course',
	templateUrl: './create-course.component.html',
	styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
	@Input() course: CourseModel;
	courseForm: FormGroup;
	subjects: FormArray;
	videos: Video[][];
	showYTSearch: boolean;
	showYTResult: boolean;
	keyword: string;
	loadingVideo: Promise<Object>;
	selectedOption: string[];
	p: number = 1;

	init() {
		var tag = document.createElement('script');
		tag.src = 'https://apis.google.com/js/api.js';
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	constructor(private courseService: CourseService, private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
		this.videos = [];
		this.selectedOption = [];
		this.showYTSearch = false;
		this.showYTResult = false;
		this.init();
		if (this.authService.isAuth()) {
			this.courseForm = new FormGroup({
				title: new FormControl(null),
				description: new FormControl(null),
				imgURL: new FormControl(null),
				subjects: new FormArray([])
			});
			this.subjects = this.courseForm.get('subjects') as FormArray;
		} else {
			this.router.navigateByUrl('/');
		}
	}

	async onSubmit() {
		const subjectModels = [];
		this.courseForm.value.subjects.forEach((s, i) => {
			console.log(s.f);
			subjectModels.push({ title: s.title, description: s.description, videoURL: this.selectedOption[i] } );
			console.log("Selected video for " + i + " is " + this.selectedOption[i]);
		});
		const values = this.courseForm.value;
		console.error('3');
		const course = {
			title: values.title,
			description: values.description,
			imgURL: values.imgURL,
			subjects:	subjectModels
		};
		this.courseService.addCourse(course);
	}

	addSubject() {
		this.videos.push([]);
		this.selectedOption.push("");
		const subject = new FormGroup({
			title: new FormControl(null),
			description: new FormControl(null),
			keywordVideo: new FormControl(null)
		});
		this.subjects.push(subject);
	}

	deleteSubject(index: number) {
		this.videos.pop();
		this.subjects.removeAt(index);
	}

	selectVideo(subjectIdx: number, videoIndex: any) {
		this.selectedOption[subjectIdx] = videoIndex;
	}


	authenticate() {
		try {
			gapi.load("client:auth2", function () {
				gapi.auth2.init({ client_id: "314802327156-c33unne1i0d51r6n6fppmtf8l5qqao9h.apps.googleusercontent.com" }).
					then(function (authInstance) {
						console.log("Sign-in successful");
						return gapi.auth2.getAuthInstance()
							.signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
							.then(
								this.loadClient.bind(this)
							);
					}.bind(this));
			}.bind(this));
		} catch (error) {
			console.error("Error signing in", error);
		}
	}

	loadClient() {
		try {
			gapi.load("client:auth2", function () {
				return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest", 'V3')
					.then(function () {
						console.log("this.GAPI client loaded for API");
						alert("Please wait a minute while YouTube loads");
						this.showYTSearch = true;
					}.bind(this));
			}.bind(this));
		}
		catch (error) {
			console.error("Error loading this.GAPI client for API", error);
		}
	}

	async execute(subjectIdx: number) {
		try {
			this.videos[subjectIdx] = [];
			this.showYTResult = false;
			const videosOrig = await gapi.client['youtube'].search.list({
				"part": [
					"snippet"
				],
				"forMine": true,
				"maxResults": 25,
				"q": this.courseForm.value.subjects[subjectIdx].keywordVideo,
				"type": [
					"video"
				]
			});
			console.log(this.courseForm);
			console.log("Searched for " + this.courseForm.value.subjects[subjectIdx].keywordVideo);
			if (videosOrig.result.items.length > 0) this.videos[subjectIdx].push({ id: "", name: "Don't upload a video", image: "" });
			for (var counter: number = 0; counter < videosOrig.result.items.length; counter++) {
				this.videos[subjectIdx].push({
					"id": videosOrig.result.items[counter].id.videoId,
					"name": videosOrig.result.items[counter].snippet.title,
					"image": videosOrig.result.items[counter].snippet.thumbnails.default.url,
				});
			}
			console.log(this.videos);
			this.showYTResult = true;
			return videosOrig;
		} catch (error) {
			console.error("Execute error", error);
		}
	}
}
