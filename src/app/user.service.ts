import { UserType } from './modules/user/models/UserModel';
import { Injectable } from '@angular/core';
import { StudentModel } from './modules/student/models/StudentModel';
import { ProfessorModel } from './modules/professor/models/ProfessorModel';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { baseUrl } from "./../environments/environment";
import  axios from 'axios';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	userUpdated = new Subject<StudentModel | ProfessorModel>();

	async addUser(user: StudentModel | ProfessorModel) {
		try {
			await axios.post(`${baseUrl}users/signup`, user);
			console.log(user);
		}catch(error){
			console.log(error);
		}
	}

	async getCurrentUser(): Promise<StudentModel | ProfessorModel>{
		try {
			console.error('2.1')
			const config = {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
			};
			console.error('2.2')
			const res = await axios.get(`${baseUrl}users/profile`, config);
			console.error('2.3')
			if(res.data.type == "student"){
				const userM = new StudentModel(
					res.data.email,
					res.data.name,
					res.data.last,
					"placeholder",
					res.data.title,
					res.data.description,
					res.data.image,
					res.data.followup,
				);
				userM.id = res.data._id;
				return userM;
			}
			else if(res.data.type == "professor"){
				const userM = new ProfessorModel(
					res.data.email,
					res.data.name,
					res.data.last,
					"placeholder",
					res.data.title,
					res.data.description,
					res.data.image,
					res.data.followup,
				);
				userM.id = res.data._id;
				return userM;
			}
		} catch(error){
			console.log('fuck me sideways');
		}
	}

	async getUser(id: string):Promise<StudentModel | ProfessorModel>{
		try{
			const res = await axios.get(`${baseUrl}users/${id}`);
			if(res.data.type == "student"){
				const userM = new StudentModel(
					res.data.email,
					res.data.name,
					res.data.last,
					"placeholder",
					res.data.title,
					res.data.description,
					res.data.image,
					res.data.followup,
				);

				userM.id = res.data._id;
				return userM;
			}
			else if(res.data.type == "professor"){
				const userM = new ProfessorModel(
					res.data.email,
					res.data.name,
					res.data.last,
					"placeholder",
					res.data.title,
					res.data.description,
					res.data.image,
					res.data.followup,
				);
				userM.id = res.data._id;
				return userM;
			}
		}catch(error){
			console.log(error);
		}
	}

	async updateUser(user: StudentModel | ProfessorModel) {
		try {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
			};
			await axios.post(`${baseUrl}users/update`, user, config);
		} catch (error) {
			console.error(error);
		}
	}

	async deleteUser(id: string) {
		try {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
			};
			await axios.delete(`${baseUrl}users/${id}`, config);
		}catch(error){
			console.log(error);
		}
	}

	async getUsers(): Promise<(StudentModel | ProfessorModel)[]> {
		try {
			return await axios.get(`${baseUrl}users/`);
		}catch(error){
			console.log(error);
		}
	}
}
