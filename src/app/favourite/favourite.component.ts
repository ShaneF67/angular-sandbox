import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  starFilled = false;
  constructor() { }

  ngOnInit() {
  }


  clickStar() {
    this.starFilled = !this.starFilled;
  }

}
