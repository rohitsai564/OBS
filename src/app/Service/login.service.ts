import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    msg$= new BehaviorSubject("");
    user$= new BehaviorSubject<User>({});
    constructor(private http: Httpclient) {}

}
