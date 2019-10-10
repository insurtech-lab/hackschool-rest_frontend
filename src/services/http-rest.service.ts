import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

export interface Order {
  id: number;
  name: string;
  forename: string;
  position: string;
  street: string;
  zip: string;
  town: string;
}

export const POSITIONS = [
  {id: 0, name: 'Pizza'},
  {id: 1, name: 'Cola'},
  {id: 2, name: 'Kaffee'},
  {id: 3, name: 'Tee'},
  {id: 4, name: 'Steak mit Pommes'},
  {id: 5, name: 'Veggie-Burger'},
  {id: 6, name: 'Curry'}
];

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Charset': 'utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpRestService {

  constructor(private http: HttpClient) {
  }

  // GET
  getObject(id: string) {
    const suburl = 'https://w3w75.sse.codesandbox.io/api/orders';
    const url = `${suburl}/${id}`;
    return this.http.get<Order>(url)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('https://w3w75.sse.codesandbox.io/api/orders')
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
   /*const t: Order = {
     id: '0120',
    name: 'yves',
    forename: 'sta',
    position: 'bestellung',
    street: 'affe',
    zip: '74821',
    town: 'mosbach',
   };
   const temp = [];
   temp.push(t);
   return of(temp);*/
  }

  // POST
  // you're expecting the server to return the new order
  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('https://w3w75.sse.codesandbox.io/api/orders', order, httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

/*  // PUT
  putOrder(order: Order): Observable<Order> {
    return this.http.put<Order>('http://localhost:3000/order', order, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }*/

  // DELETE
  deleteOrder(id: string): Observable<{}> {
    const suburl = 'https://w3w75.sse.codesandbox.io/api/orders'; // Part of DELETE URL
    const url = `${suburl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
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
        `body was: ${error.error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
