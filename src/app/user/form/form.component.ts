import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../../app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  user: User = { id: 0 };
  _user?: User;
  id = -1;
  userList: User[] = [];

  constructor(public userService: UserService,
    public activatedRoute: ActivatedRoute, public router: Router) { }
  nextId: number = 0;

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    if (this.id > 0) {

      this.userService.returnUser(this.id).subscribe(data => {
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
    this.nextId = this.userService.returnAll.length;
    this.user.id = this.nextId++;
    this.userService.addUser({ ...this.user }).subscribe(
      res => {
        form.reset();
        this.router.navigate(["user/list"]);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord() {
    console.log(this.user.id);
    this.userService.updateUser({ ... this.user }).subscribe(
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
