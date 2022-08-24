import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from '../Services/user.service';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { AgePipePipe } from './age-pipe.pipe';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations:
    [FormComponent,
      TableComponent, AgePipePipe, PostComponent],
  imports: [
    CommonModule,
    UserRoutingModule, FormsModule

  ],
  providers: [UserService, AgePipePipe]
})
export class UserModule { }
