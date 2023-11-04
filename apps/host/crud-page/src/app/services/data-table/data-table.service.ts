import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  };
  postData = (body: any) => {
    return this.http.post('https://jsonplaceholder.typicode.com/users', body);
  };
  putData = (body: any) => {
    return this.http.put('https://jsonplaceholder.typicode.com/users', body);
  };
  deleteData = (id: number) => {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  };
}
