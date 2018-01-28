import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs/Observable";

@Injectable()
export class GithubDataService {

  constructor( public http: HttpClient ) { }

  searchUser( userName ) {
    return this.http.get<Observable<any>>(`https://api.github.com/users/${userName}`)
  }
}

