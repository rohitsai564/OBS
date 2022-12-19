import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  signup(customer: Customer) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  postCustomer(customer:Customer):Observable<any>{
    return this.http.post('http://localhost:1250/api/admin/customer/post', customer);
  }
}
