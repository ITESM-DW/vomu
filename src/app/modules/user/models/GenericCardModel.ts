export class GenericCardModel {
	title: string;
	subtitle: string;
	body: string;
	url: string;
	url2: string;
	imgURL: string;

	constructor(title: string, subtitle: string, body: string, imgURL: string, url: string, url2?: string) {
		this.title = title;
		this.subtitle = subtitle;
		this.body = body;
		this.url = url;
		this.url2 = url2 ? url2 : undefined;
		this.imgURL = imgURL;
	}
}
