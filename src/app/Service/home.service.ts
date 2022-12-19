import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Model/book.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) {

   }
   getAllBooks():Observable<Book[]>
   {
    return this.http.get<Book[]>('http://localhost:1250/api/book/all');

    }
}

