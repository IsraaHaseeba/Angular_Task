import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { AuthenticateService, PostsService, PostViewModel, UserViewModel } from 'src/typescript-angular-client-generated (5)';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post?: PostViewModel;
  user?: UserViewModel;
  postsList?: PostViewModel[];
  constructor(public postService: PostsService, public authService: AuthenticateService) { }

  ngOnInit(): void {
    this.postService.apiPostsGet().subscribe(posts => this.postsList = posts);
  }
  share() {

    var x = document.getElementById("textarea")!.textContent;
    if (x) this.post!.description = x;
    this.postService.apiPostsPost(this.post).subscribe();
  }

}
