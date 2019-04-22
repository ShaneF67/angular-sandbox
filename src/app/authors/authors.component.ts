import { AuthorsService } from '../services/authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors;
  countOfAuthors: number;


  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.countOfAuthors = this.authors.length;
   }

}
