import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  showleArticle:boolean = true;

  constructor() { }

  fireEvent(e){
    console.log(e);
  }

  toggleArticle(){
    this.showleArticle = !this.showleArticle;
  }
}
