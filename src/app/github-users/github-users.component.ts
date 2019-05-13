import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  users;
  constructor(
    private route: ActivatedRoute,
    private service: GithubService) { }

  ngOnInit() {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(
        switchMap(combined => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');

          return this.service.getAll();
        }))
      .subscribe(users => {
        this.users = users;
      });

  }

}
