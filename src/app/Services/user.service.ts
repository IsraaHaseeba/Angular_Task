import { Injectable } from '@angular/core';
import { User } from '../app.component';

@Injectable({ providedIn: 'root' })
export class UserService {


    public userList: User[] = [
        { id: 0, name: 'Israa', username: "israahaseeba", email: "h@gmail.com", password: "111" },
        { id: 1, name: "Mohammad", username: "israahaseeba", email: "h@gmail.com", password: "98" },
        { id: 2, name: "Luay", username: "israahaseeba", email: "h@gmail.com", password: "45" },
        { id: 3, name: "Basim", username: "israahaseeba", email: "h@gmail.com", password: "12" },
    ];

    getUserById(id: number): User {
        console.log(id);
        return this.userList.find(user => this.userList.indexOf(user) === id)!;
    }

    getAllUsers(): Array<User> {
        return this.userList;
    }
}

