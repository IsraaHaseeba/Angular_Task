import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../../app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { AuthenticateService, UsersService, UserViewModel } from 'src/typescript-angular-client-generated (5)';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  user: UserViewModel = { id: 0 };
  _user?: UserViewModel;
  id = -1;
  userList: User[] = [];

  constructor(public userService: UsersService, public authService: AuthenticateService,
    public activatedRoute: ActivatedRoute, public router: Router) { }
  nextId: number = 0;

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    if (this.id > 0) {

      this.userService.apiUsersIdGet(this.id).subscribe(data => {
        this.user = data;
      });


    }


  }
  addUser(form: NgForm) {
    if (this.user.id && this.user.id > -1) {
      this.updateRecord();

    }


    else {
      this.insertRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.userService.apiUsersGet().subscribe(data => this.nextId = data.length);
    this.user.id = this.nextId++;
    this.userService.apiUsersPost({ ...this.user }).subscribe(res => {
      form.reset();
      this.router.navigate(["user/list"]);
    },
      err => {
        console.log(err);
      });

  }

  updateRecord() {
    console.log(this.user.id);
    this.userService.apiUsersPut({ ... this.user }).subscribe(
      res => {
        this.router.navigate(["user/list"]);
        console.log("Updated");

      },
      err => {
        console.log(err);
      }
    );
  }





}
