export class SubjectModel {
	id: number;
	title: string;
	description: string;
	videoURL: string;

	constructor(id: number, title: string, description: string, videoURL: string) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.videoURL = videoURL;
	}
}
