import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { admin } from '../Model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllManagers() : Observable<admin[]>{
    return this.http.get<admin[]>('http://localhost:1250/api/admin/add');
  }
}