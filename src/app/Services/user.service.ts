import { Injectable } from '@angular/core';
import { User } from '../app.component';

@Injectable()
export class UserService {


    private userList: User[] = [
        { name: 'Israa', username: "israahaseeba", age: 20, email: "h@gmail.com", password: "111" },
        { name: "Mohammad", username: "israahaseeba", age: 20, email: "h@gmail.com", password: "98" },
        { name: "Luay", username: "israahaseeba", age: 20, email: "h@gmail.com", password: "45" },
        { name: "Basim", username: "israahaseeba", age: 20, email: "h@gmail.com", password: "12" },
    ];

    getUserById(id: number): User {
        console.log(id);
        return this.userList.find(user => this.userList.indexOf(user) === id)!;
    }

    getAllUsers(): Array<User> {
        return this.userList;
    }
}

