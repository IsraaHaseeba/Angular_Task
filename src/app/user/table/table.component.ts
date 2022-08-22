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
  public userList: any;
  constructor(public userService: UserService, public agePipePipe: AgePipePipe, public router: Router) { }

  ngOnInit() {
    this.userService.returnAll().subscribe(
      data => this.userList = data);
  }
  /*addUser(user: User) {

    this.userService.userList.push(user);
  }


  deleteUser(user: User) {
    let i = this.userService.list?.indexOf(user);
    if (i && i >= 0) this.userService.list?.splice(i, 1);
  }*/
  editUser(user: User) {
    this.router.navigate(["user/" + user.id]);
  }

}
