import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';


export interface User {

  Id: number;
  Name?: string;
  Password?: string;
  Email?: string;
  Age?: number;
  Dob?: Date;

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
