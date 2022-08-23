import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../app.component';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    readonly baseURL = 'https://localhost:7125/api/Users';

    user: User = { id: 0, lastName: '', email: '' };


    addUser(user: User) {
        return this.http.post(`${this.baseURL}`, user);
    }
    updateUser(user: User) {
        console.log(user);
        return this.http.put(`${this.baseURL}`, user);
    }
    returnAll(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseURL}`);
    }
    returnUser(id: number): Observable<User> {
        return this.http.get<User>(this.baseURL + "/" + id);
    }



    /*
        getUserById(id: number): User {
            console.log(id);
            return this.userList.find(user => this.userList.indexOf(user) === id)!;
        }
    
        getAllUsers(): Array<User> {
            return this.userList;
        }*/
}


