import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';

/*import service*/
import { GithubDataService } from '../../services/github-data.service';

@Component({
  selector: 'app-serch-user',
  templateUrl: './serch-user.component.html',
  styleUrls: ['./serch-user.component.css']
})
export class SerchUserComponent implements OnInit {

  user: Observable<any>;
  nickname: string;
  searchingUser: boolean = false;
  newMessage: string;
  data: any;

  constructor( public gitHubService: GithubDataService ) { }

  ngOnInit() {
    // this.gitHubService.searchUser('dmgame').subscribe( user => {
    //   this.user = user;
    //   console.log(user);
    // });

    // this.data = new Observable( observe => {
    //
    //   setTimeout( () => {
    //     observe.next('Hello');
    //   }, 3000);
    //
    //   setTimeout(() => {
    //     observe.next('World');
    //   }, 5000);
    //
    //   setTimeout( () => {
    //     observe.next('!');
    //   }, 6000);
    //
    // });
    // this.data.subscribe( data => {
    //   console.log(data);
    // });
  }

  onSearch( formGit ) {
    this.searchingUser = true;
    this.gitHubService.searchUser(this.nickname).subscribe( user => {
      this.user = user;
      this.searchingUser = false;
      this.newMessage = 'We found user';
      console.log(user);
    });
  }
}


