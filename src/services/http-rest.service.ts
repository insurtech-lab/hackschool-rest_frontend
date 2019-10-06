import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

export interface Order {
  title: string;
  data: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpRestService {

  constructor(private http: HttpClient) { }


  // GET
  getObject() {
    return this.http.get<Order>('http://localhost/');
  }

  // POST
  // you're expecting the server to return the new order
  addObject(order: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost/', order, httpOptions)
      .pipe(
        catchError(err => throwError('POST ist fehlgeschlagen' + order))
      );
  }

  // PUT
  putObject(a: any): any {
    return null;
  }

  // DELETE
  deleteObject(a: any): any {
    return null;
  }



}
