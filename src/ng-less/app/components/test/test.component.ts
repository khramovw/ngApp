import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  name:string = 'Denis';
  showName:boolean = false;
  greeting:number = 1;

  // bind prop

  imgUrl:string = 'http://lorempixel.com/400/200';

  articalHide:boolean = false;

  // ngClass

  isSpecial:boolean = true;
  canSave:boolean = true;

  curentClass = {};

  constructor() {
    this.curentClass = {
      special: this.isSpecial,
      saveable: this.canSave
    }
  }
}
