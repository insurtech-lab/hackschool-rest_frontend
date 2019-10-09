import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
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

  // some initial error handling -- nothing speical
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
