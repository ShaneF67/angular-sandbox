import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  @Input() starFilled: boolean;

  clickStar() {
    this.starFilled = !this.starFilled;
  }

}
