import { GithubService } from '../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  users;
  constructor(private service: GithubService) { }

  ngOnInit() {

    this.service.getAll()
      .subscribe(users => this.users = users);
  }

}
