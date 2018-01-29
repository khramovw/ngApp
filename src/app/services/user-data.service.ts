import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class UserDataService {

  constructor( public http: HttpClient ) { }

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  adUser(user){
    return this.http.post('https://jsonplaceholder.typicode.com/users', user, {headers: new HttpHeaders().set('Content-type', 'application/json; charset=UTF=8')});
  }
  getUserImg() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

}
