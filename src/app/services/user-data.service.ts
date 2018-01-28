import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class UserDataService {

  constructor( public http: HttpClient ) { }

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUserImg() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

}
