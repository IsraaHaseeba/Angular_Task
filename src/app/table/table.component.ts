import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../app.component';
import { UserCacheService } from '../Services/user_cache.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //@Input() userList: User[] = [];

  public userList: User[] = [
    { name: 'Israa', username: "israahaseeba", age: 20, email: "h@gmail.com", password: "111" },
    { name: "Mohammad", username: "israahaseeba", age: 20, email: "h@gmail.com", password: "98" },
    { name: "Luay", username: "israahaseeba", age: 20, email: "h@gmail.com", password: "45" },
    { name: "Basim", username: "israahaseeba", age: 20, email: "h@gmail.com", password: "12" },
  ];



  user: User = { name: '', username: '', age: 0, email: '', password: '' };


  addUser(user: User) {
    this.userList.push(user);
  }


  deleteUser(user: User) {
    let i = this.userList.indexOf(user);
    if (i >= 0) this.userList.splice(i, 1);
  }

}
