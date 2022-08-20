import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserService } from './Services/user.service';
import { UserCacheService } from './Services/user_cache.service';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService,
    UserCacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
