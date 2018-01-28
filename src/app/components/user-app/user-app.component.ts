import { Component, OnInit } from '@angular/core';
import { UserDataService} from "../../services/user-data.service";


@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})
export class UserAppComponent implements OnInit {
  users: any[];
  photos: any;
  userAppName: string;

  constructor( public userService : UserDataService ) { }

  ngOnInit() {
    this.userService.getUser().subscribe( users => {
      this.users = users;
      console.log(users[0].name);
    }, error => {
      console.error(error);
    });

    this.userService.getUserImg().subscribe(photos => {
      this.photos = photos;
      console.log(this.photos);
    }, error => {
      console.error(error);
    });
  }

  onSubmit(form){
    this.users.unshift(this.userAppName);
    console.log(form);
  }

  removeUser(i){
    console.log(i);
    this.users.splice(i,1);
    console.log(this.users[i]);
  }

}
