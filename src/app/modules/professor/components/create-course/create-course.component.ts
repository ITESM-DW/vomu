import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CourseModel } from '../../models/CourseModel';
import { CourseService } from 'src/app/course.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { SubjectModel } from '../../models/SubjectModel';

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

	onSubmit() {
		const subjectModels = [];
		this.courseForm.value.subjects.forEach((s, i) => {
			console.log(s.f)
			subjectModels.push(new SubjectModel(i, s.title, s.description, this.selectedOption[i]));
			console.log("Selected video for "+ i +" is " +this.selectedOption[i]);
		});
		const values = this.courseForm.value;
		const course = new CourseModel(
			this.courseService.courses[this.courseService.courses.length - 1].id + 1,
			values.title,
			values.description,
			values.imgURL,
			subjectModels,
			[],
			this.authService.getCurrentUser()
		);
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


	async authenticate() {
		try {
			gapi.load("client:auth2", function() {
				gapi.auth2.init({client_id: "314802327156-u3a9dtapvsdjo5vjpv7nfqf56vo75jg1.apps.googleusercontent.com"});
			});
			var res = await gapi.auth2.getAuthInstance()
			.signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"});
			console.log("Sign-in successful");
			return res;
		} catch (error) {
			console.error("Error signing in", error);
		}
		/*gapi.load("client:auth2", function() {
			gapi.auth2.init({client_id: "314802327156-u3a9dtapvsdjo5vjpv7nfqf56vo75jg1.apps.googleusercontent.com"});
		});
		return gapi.auth2.getAuthInstance()
			.signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
			.then(function() { console.log("Sign-in successful"); },
				  function(err) { console.error("Error signing in", err); });*/
	}
	
	async loadClient() {
		try {
			const res = await gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest", 'V3');
			console.log("this.GAPI client loaded for API");
			this.showYTSearch = true;
			return res;
		}
		catch (error) {
			console.error("Error loading this.GAPI client for API", error);
		}
		/*gapi.client.setApiKey(GOOGLE_API_KEY);
		return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest", 'V3')
			.then(function() { console.log("this.GAPI client loaded for API"); },
				function(err) { console.error("Error loading this.GAPI client for API", err); });*/
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
			console.log("Searched for "+ this.courseForm.value.subjects[subjectIdx].keywordVideo);
			for(var counter:number = 0; counter<videosOrig.result.items.length; counter++){
				this.videos[subjectIdx].push({
					"id" : videosOrig.result.items[counter].id.videoId,
					"name" : videosOrig.result.items[counter].snippet.title,
					"image" : videosOrig.result.items[counter].snippet.thumbnails.default.url,
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