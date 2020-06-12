export class SubjectModel {
	_id: string;
	title: string;
	description: string;
	videoURL: string;

	constructor(id: string, title: string, description: string, videoURL: string) {
		this._id = id;
		this.title = title;
		this.description = description;
		this.videoURL = videoURL;
	}
}
