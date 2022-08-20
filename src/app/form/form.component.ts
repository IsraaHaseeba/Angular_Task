import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserCacheService } from '../Services/user_cache.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  user: User = { name: '', username: '', age: 0, email: '', password: '' };

  @Output() userVM = new EventEmitter<User>();




  @Input() id = 0;

  constructor(private userCacheService: UserCacheService) { }

  ngOnInit() {
    this.user = this.userCacheService.fetchCachedUser(this.id);
    console.log("returned user: " + this.user.name)

  }

  get _user() {

    return this.userCacheService.user;
  }

  addUser(form: NgForm) {
    if (!form.form.valid) {
      form.form.markAllAsTouched();
    }
    else
      this.userVM.emit({ ...this.user });
    form.reset();

  }




}
