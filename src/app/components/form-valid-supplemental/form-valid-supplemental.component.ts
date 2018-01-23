import { Component } from '@angular/core';

interface UserTypeData {
  name:string,
  email:string,
  data:any,
  editing:boolean
}

@Component({
  selector: 'app-form-valid-supplemental',
  templateUrl: './form-valid-supplemental.component.html',
  styleUrls: ['./form-valid-supplemental.component.css']
})
export class FormValidSupplementalComponent {

  dateNow = new Date().toLocaleString('ru');
  editing = false;
  editUserName:string;

  userSupp: UserTypeData = {
    name: '',
    email: '',
    data: 0,
    editing: false
  };

  usersSupp: UserTypeData[] = [
    {
      name: 'Denis',
      email: 'denis@user.test',
      data: this.dateNow,
      editing: this.editing
    },
    {
      name: 'Alex',
      email: 'alex@user.test',
      data: this.dateNow,
      editing: this.editing
    }
  ];

  constructor() {

  }

  onSubmit(formSupplemental) {

    this.dateNow = new Date().toLocaleString('ru');

    this.usersSupp.push({
      name: this.userSupp.name,
      email: this.userSupp.email,
      data: this.dateNow,
      editing: false
    });
    console.log(this.userSupp);
    formSupplemental.resetForm();
  }

  removeUser(i) {
    this.usersSupp.splice(i, 1);
  }

  editUser(i) {
    this.usersSupp[i].editing = !this.usersSupp[i].editing;
    console.log(this.usersSupp[i]);
  }
  saveUser(i) {


    // console.log(this.usersSupp[i].value);

  }
}
