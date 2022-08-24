import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';


export interface User {

  id: number;
  //dob?: Date;
  //name: string;
  firstName?: string;
  lastName?: string;
  //age?: number;
  email?: string;
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
