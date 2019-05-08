import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {


  private posts;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
    .subscribe((response: Response) => {
      this.posts = response;
      },
        error => {
          console.log(error);
        });
  }

  createPost(input: HTMLElement) {
    this.service.createPost(input)
      .subscribe((response: Response) => {
        console.log(response);
      },
      (error: AppError) => {

        if (error instanceof NotFoundError) {
          alert("Sorry an error has occurred");
        } else {
          alert("An unexpected error occurred");
          console.log(error);
        }
      });
  }

  updatePost(input: HTMLElement) {
    this.service.updatePost(input)
      .subscribe(response => {
        console.log(response);
      },
        error => {
          console.log(error);
        });
  }

  deletePost(input: HTMLElement) {
    this.service.deletePost(input.id)
      .subscribe(response => {
        let index = this.posts.indexOf(input);
        this.posts.splice(index, 1);
        console.log(response);
      },
        (error: AppError) => {

          if (error instanceof NotFoundError) {
            alert("This post has already been deleted");
          } else {
            alert("An unexpected error occurred");
            console.log(error);
          }
        });
  }

}
