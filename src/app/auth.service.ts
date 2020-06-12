import { Injectable } from '@angular/core';
import { Subject, Observable, throwError, TimeoutError } from 'rxjs';
import { UserService } from './user.service';
import { StudentModel } from './modules/student/models/StudentModel';
import { ProfessorModel } from './modules/professor/models/ProfessorModel';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { baseUrl } from "./../environments/environment";
import  axios from 'axios';

@Injectable({
	providedIn: 'root'
})


export class AuthService {
	user: StudentModel | ProfessorModel;
	authChanged = new Subject<boolean>();
	loggedIn = true;
	// endpointLogin: `${baseUrl}users/login`;
	// endpointAllUsers:"http://localhost:5000/api/users";

	// Error handler for angular console
	handleError(error: HttpErrorResponse){
		let errorMessage = 'Unkown error!';
		if(error.error instanceof ErrorEvent){
			errorMessage = `Error: ${error.error.message}`;
		}else {
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}

	//Data for using in json response
	private extractData(res: Response){
		let body = res;
		return body || {};
	}

	constructor(private userService: UserService, private http: HttpClient) { }

	isAuth() {
		this.authChanged.next(this.loggedIn);
		return this.loggedIn;
	}

	async getCurrentUserModel(): Promise<StudentModel | ProfessorModel> {
		if (this.user) {
			console.error('returning existing');
			console.error(this.user);
			return this.user;
		} else {
			console.error('fetching');
			const user = await this.userService.getCurrentUser();
			this.user = user;
			return this.user;
		}
	}

	async login(email: string, password: string): Promise<boolean> {
		//Before
		// const users = this.userService.getUsers();
		// localStorage.setItem('dataSource', this.dataSource.length);
		// for (let i = 0; i < users.length; i++) {
		// 	if (users[i].email === email && users[i].password === pwd) {
		// 		this.loggedIn = true;
		// 		this.user = i;
		// 		this.authChanged.next(this.loggedIn);
		// 		return true;
		// 	}
		// }
		// return false;

		//With backend
		var httpOptions = {
			'Content-Type': 'application/json',
			Accept: '*/*',
			'Access-Control-Allow-Origin':'*'
		};
		const requestOptions = {
			headers:new HttpHeaders(httpOptions)
		};
		if( await this.loginRequest(email, password) == true){
			this.loggedIn = true;
			this.authChanged.next(this.loggedIn);
			return true;
		}
		return false;
	}

	logout() {
		this.loggedIn = false;
		this.user = null;
		this.authChanged.next(this.loggedIn);
		localStorage.removeItem("token");

	}

	async loginRequest(email, password): Promise<boolean>{
		try {
			const { data: { token }  } = await axios.post(`${baseUrl}users/login`, {
				email,
				password,
			});
			localStorage.removeItem("token");
			localStorage.setItem("token", token);
			// console.log(res.data);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
