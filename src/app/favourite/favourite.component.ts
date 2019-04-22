import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input() starFilled: boolean;
  constructor() { }

  ngOnInit() {
  }


  clickStar() {
    this.starFilled = !this.starFilled;
  }

}
