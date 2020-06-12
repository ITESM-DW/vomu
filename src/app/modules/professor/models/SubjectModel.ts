export class SubjectModel {
	id: string;
	title: string;
	description: string;
	videoURL: string;

	constructor(id: string, title: string, description: string, videoURL: string) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.videoURL = videoURL;
	}
}
