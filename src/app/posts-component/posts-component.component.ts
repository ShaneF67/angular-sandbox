import { BadInput } from './../common/bad-input';
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
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = "";

    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          alert("Sorry an error has occurred");
        } else throw error;
      });
  }

  updatePost(input: HTMLElement) {
    this.service.update(input)
      .subscribe(updateResult => console.log(updateResult));
  }

  deletePost(input: HTMLElement) {
    this.service.delete(input.id)
      .subscribe(() => {
        let index = this.posts.indexOf(input);
        this.posts.splice(index, 1);
      },
        (error: AppError) => {

          if (error instanceof NotFoundError) {
            alert("This post has already been deleted");
          } else throw error;
        });
  }

}
