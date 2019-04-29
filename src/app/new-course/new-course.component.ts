import { Component, Input } from '@angular/core';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

  courses = [];

  courseSelections = [
    { id: 1, name:'Development'},
    { id: 2, name:'Art'},
    { id: 3, name:'Languages'}
  ]

  @Input("moneyBackGuarantee")
  moneyBackGuarantee:boolean;
  
  formSubmitted(course) {
    this.courses.push(course);
  }
 

}
