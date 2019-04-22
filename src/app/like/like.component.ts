import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('isLiked') isLiked: boolean;

  @Input('likesCount') likesCount: number;

  likeClick() {
    this.isLiked = !this.isLiked;
    
    this.isLiked ? this.likesCount++ : this.likesCount--;

  }

}
