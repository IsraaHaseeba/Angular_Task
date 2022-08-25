import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { PostsService, PostViewModel, UserViewModel } from 'src/typescript-angular-client-generated (5)';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post?: string;
  user?: UserViewModel;
  postsList?: PostViewModel[];
  constructor(public postService: PostsService) { }

  ngOnInit(): void {
    this.postService.apiPostsGet().subscribe(posts => this.postsList = posts);
  }

}
