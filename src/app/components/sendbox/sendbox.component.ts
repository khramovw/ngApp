import { Component } from '@angular/core';

import { User } from '../User';

// interface User{
//   id:number, nameUser:string, email:string
// }

@Component({
    selector: 'sendbox',
    template: `
      <hr>
      <h1>Less 1</h1>
      <h1>Hello {{ name }} year old is {{ age }}</h1>
      <h2>My name is {{ person.firstName }} {{ person.lastName }}</h2>
      <ul>
        <li>{{ 'Hello' }}</li>
        <li>{{ 1+1 }}</li>
        <li>{{ showAge() }}</li>
      </ul>
      <ul>
        <li *ngFor="let user of users; let i = index">{{ i + 1 }} {{ user.nameUser }} years old {{ user.age }}</li>
      </ul>
    `
})

export class SendboxComponent{
  name:string = 'Denis';
  age:number = 28;
  hasChildren:boolean = true;
  city:any = 'Kiev';
  numberArray:number[] = [1,2,3];
  stringArray:string[] = ['one', '2', '3'];
  anyArray:any[] = ['one', 2, {}];
  myTuple:[string, number] = ['one', 2, 3, 4];
  unusable:void = undefined; //undefined, null
  person = {
    firstName: 'Denis',
    lastName: 'Mescheryakov'
  };

  user: User;    // проверяем типы в масиве
  users: User[]; // проверяем типизацию объектов в масиве

  constructor(){
    console.log('Component run...', this.age, this.showAge());

    // this.user = {
    //   id: 1,
    //   nameUser: 'Denis',
    //   email: 'mail@mail.org'
    // };

    this.users = [
      {
        id: 1,
        nameUser: 'Denis',
        age: 28,
        email: 'mail1@mail.org'
      },
      {
        id: 2,
        nameUser: 'Vladislav',
        age: 40,
        email: 'mail2@mail.org'
      },
      {
        id: 3,
        nameUser: 'Aleks',
        age: 30,
        email: 'mail3@mail.org'
      }
    ]
  }

  showAge(){
    return this.age;
  }
}
