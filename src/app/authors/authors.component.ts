import { AuthorsService } from '../services/authors.service';
import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  countOfAuthors: number;


  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.countOfAuthors = this.authors.length;
   }

  ngOnInit() {
  }

}
