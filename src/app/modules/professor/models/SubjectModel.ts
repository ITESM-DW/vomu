export class SubjectModel {
	id: number;
	title: string;
	description: string;
	videoURL: string;

	constructor(title: string, description: string, videoURL: string) {
		this.title = title;
		this.description = description;
		this.videoURL = videoURL;
	}
}
