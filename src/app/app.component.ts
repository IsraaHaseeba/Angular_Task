import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { PostViewModel } from 'src/typescript-angular-client-generated (5)';


export interface User {

  id: number;
  name?: string;
  password?: string;
  email?: string;
  dob?: Date;
  posts?: PostViewModel[]

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  constructor(public router: Router) { }

}
