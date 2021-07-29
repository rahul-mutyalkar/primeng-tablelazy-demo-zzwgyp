import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Customer } from './customer';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersLarge() {
    return this.http
      .get<any>('assets/customers-large.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => {
        return data;
      });
  }
  getCustomers(params) {
    return this.http
      .get<any>(environment.apiUrl, { params: params })
      .toPromise();
  }
}
