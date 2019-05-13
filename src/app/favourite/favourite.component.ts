import { Component, Input } from '@angular/core';

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

  tweet = {
    body: "Body of tweet....",
    isLiked: false,
    likesCount: 10
  }

}
