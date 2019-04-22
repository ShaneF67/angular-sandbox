import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Shane's Angular Sandbox";

  tweet = {
    body: "Body of tweet....",
    isLiked: false,
    likesCount: 10
  }
}
