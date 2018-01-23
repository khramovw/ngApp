import { Component } from '@angular/core';
import {text} from "@angular/core/src/render3/instructions";

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent {

  text:string;
  userName:string;
  usersArray:string[] = [];

  constructor() { }

  formEvent(e){
    this.text = e.target.value;

  }

  onSubmit(form){
    console.log(this.userName);
    this.usersArray.push(this.userName);
    // this.userName = '';
    form.resetForm();
    console.log(this.usersArray);
  }

  removeUser(i){
    console.log(i);
    this.usersArray.splice(i,1);
  }
}
