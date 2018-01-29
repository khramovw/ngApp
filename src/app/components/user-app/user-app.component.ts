import { Component, OnInit } from '@angular/core';
import { UserDataService} from '../../services/user-data.service';

@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})
export class UserAppComponent implements OnInit {
  users: any;
  user: any = {
    name: '',
    email: '',
    id: 0
  };
  photos: any;
  userAppName: string;
  userAppEmail: string;
  id: number;
  userDel: boolean = false;
  imgUrl: 'http://lorempixel.com/400/200';

  constructor( public userService: UserDataService ) { }

  ngOnInit() {
    this.userService.getUser().subscribe( users => {
      this.users = users;
      console.log(users);
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

  addUser(form) {
    this.userService.adUser(this.user).subscribe(user => {
      this.users.unshift(
        {
          name: this.user.name,
          email: this.user.email,
          id: this.user.id
        }
       );
      console.log(user, this.users);
    }, error => {
      console.log(error);
    });
  }

  removeUser(i) {
    console.log(i);
    this.users.splice(i, 1);
    this.userDel = true;

    console.log(this.users[i]);
  }
}
