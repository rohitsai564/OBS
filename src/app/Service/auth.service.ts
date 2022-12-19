import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Model/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  msg$ = new BehaviorSubject('');
  user$ = new BehaviorSubject<User>({});
  constructor(private http: HttpClient) { }

  login(token: string): Observable<User> {
    let header = {
      'Authorization' : 'Basic ' + token
    }
     return this.http.get<User>( environment.serverUrl +'/login', {headers: header});
  }
}