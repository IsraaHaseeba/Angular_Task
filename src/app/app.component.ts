import { Component, NgModule } from '@angular/core';


export interface User {
  id: number;
  dob?: Date;
  name: string;
  username: string;
  age?: number;
  email: string;
  password: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';


}
