import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { 

  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, post)
    .pipe(
      catchError((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError())
        } else {
          return Observable.throw(new AppError(error));
        }
      })
    );
  }

  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, post);
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe(
    catchError((error: Response) => {
      if (error.status === 404)
        return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError(error));
    }));
  }


}
