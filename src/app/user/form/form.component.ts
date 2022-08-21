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

  user: User = { id: 0, name: '', username: '', age: 0, email: '', password: '' };
  _user?: User;
  id = 0;

  constructor(public userService: UserService, public activatedRoute: ActivatedRoute, public router: Router) { }
  nextId: number = 0;
  ngOnInit() {
    this._user = this.user;
    this.id = +this.activatedRoute.snapshot.params['id'];
    if (this.id > -1) {
      this._user = this.userService.userList.find(c => c.id === this.id);
      if (this._user)
        this.user = this._user;
    }

  }

  addUser(form: NgForm) {
    if (!form.form.valid) {
      form.form.markAllAsTouched();
    }
    else if (this.user) {
      if (this.id > -1) {
        this.userService.userList[this.user.id] = this.user;
      } else {
        this.nextId = this.userService.userList.length;
        this.user.id = this.nextId + 1;
        this.userService.userList.push({ ...this.user });
      }

      this.router.navigate(['/user/table']);

    }




  }




}
