export class GenericCardModel {
	title: string;
	subtitle: string;
	body: string;
	url: string;
	imgURL: string;

	constructor(title: string, subtitle: string, body: string, imgURL: string, url: string) {
		this.title = title;
		this.subtitle = subtitle;
		this.body = body;
		this.url = url;
		this.imgURL = imgURL;
	}
}
