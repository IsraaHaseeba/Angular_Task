import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService, LoginModel } from 'src/typescript-angular-client-generated (5)';
import { User } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public NewUser: LoginModel = { username: '', password: '' };
  constructor(public authenticateService: AuthenticateService) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    if (form.form.valid) {
      this.NewUser.username = form.value.username;
      this.NewUser.password = form.value.password;
      console.log(this.NewUser.username);
      this.authenticateService.apiAuthenticateLoginPost(this.NewUser).subscribe();
      console.log(this.authenticateService.apiAuthenticateLoginPost(this.NewUser).subscribe());


    }
  }

}
