import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../../app.component';
import { AgePipePipe } from '../age-pipe.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(public userService: UserService, public agePipePipe: AgePipePipe, public router: Router) { }

  ngOnInit() {

  }
  addUser(user: User) {

    this.userService.userList.push(user);
  }


  deleteUser(user: User) {
    let i = this.userService.userList.indexOf(user);
    if (i >= 0) this.userService.userList.splice(i, 1);
  }
  editUser(user: User) {
    this.router.navigate(["user/" + user.id]);
  }

}
