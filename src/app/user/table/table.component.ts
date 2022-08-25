import { HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { UsersService } from 'src/typescript-angular-client-generated (5)';
import { User } from '../../app.component';
import { AgePipePipe } from '../age-pipe.pipe';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public userList: any;
  linesNum: number = 0;
  constructor(public usersService: UsersService, public userService: UserService,
    public activatedRoute: ActivatedRoute, public agePipePipe: AgePipePipe, public router: Router) { }

  ngOnInit() {
    this.usersService.apiUsersGet().subscribe(data => {

      this.userList = data;
      this.linesNum = this.userList.length;


    });
    // this.userService.returnAll().subscribe(
    //   data => {
    //     this.userList = data;
    //     this.linesNum = this.userList.length;

    //   });

  }
  addUser() {
    this.router.navigate(["user/add"]);
  }


  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
  editUser(id: number) {
    this.router.navigate(["user/" + id]);
  }

}
