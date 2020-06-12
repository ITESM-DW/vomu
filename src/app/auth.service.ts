import { Injectable } from '@angular/core';
import { Subject, Observable, throwError, TimeoutError } from 'rxjs';
import { UserService } from './user.service';
import { StudentModel } from './modules/student/models/StudentModel';
import { ProfessorModel } from './modules/professor/models/ProfessorModel';
import { baseUrl } from './../environments/environment';
import axios from 'axios';

@Injectable({
	providedIn: 'root'
})


export class AuthService {
	user: StudentModel | ProfessorModel;
	authChanged = new Subject<boolean>();
	loggedIn = true;

	constructor(private userService: UserService) { }

	async isAuth() {
		const token = localStorage.getItem('token');
		if (token) {
			const { data } = await axios.get(`${baseUrl}users/auth`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			return data.message;
		} else {
			return false;
		}

	}

	async getCurrentUserModel(): Promise<StudentModel | ProfessorModel> {
		if (this.user) {
			return this.user;
		} else {
			const user = await this.userService.getCurrentUser();
			this.user = user;
			return this.user;
		}
	}

	async login(email: string, password: string): Promise<boolean> {
		if (await this.loginRequest(email, password) === true) {
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
		localStorage.removeItem('token');

	}

	async loginRequest(email, password): Promise<boolean> {
		try {
			const { data: { token } } = await axios.post(`${baseUrl}users/login`, {
				email,
				password,
			});
			localStorage.removeItem('token');
			localStorage.setItem('token', token);
			// console.log(res.data);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	async getGraphs(): Promise<any> {
		try {
			const { data: graphs } = await axios.get(`${baseUrl}graphs`);
			return graphs;
		} catch (error) {
			console.log(error);
		}
	}
}
