import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

export interface Order {
  title: string;
  data: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpRestService {

  constructor(private http: HttpClient) {
  }

  // GET
  getObject() {
    return this.http.get<Order>('http://localhost/')
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  // POST
  // you're expecting the server to return the new order
  addObject(order: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost/', order, httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // PUT
  putObject(order: Order): Observable<Order> {
    return this.http.put<Order>('http://localhost/', order, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // DELETE
  deleteObject(id: number): Observable<{}> {
    const suburl = 'http://localhost/'; // Part of DELETE URL
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
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
