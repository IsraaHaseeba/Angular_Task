import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './user/post/post.component';

export const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user/user.module').then(c => c.UserModule) },
  { path: 'post', component: PostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
